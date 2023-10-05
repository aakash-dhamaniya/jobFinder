import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiKey = process.env.REACT_APP_SECRET_KEY;
const appId = process.env.REACT_APP_SECRET_ID;
export const getAlljobs = createAsyncThunk(
  "getAlljobs",
  async (data, { rejectWithValue }) => {
    const language = data;
    console.log(language);
    const response = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${apiKey}&results_per_page=10&what=${language}&title_only=developer`
    );
    try {
      return response.data.results;
    } catch (error) {
      console.log("in catch");
      return rejectWithValue(error);
    }
  }
);
const jobsSlice = createSlice({
  name: "job",
  initialState: {
    jobs: JSON.parse(localStorage.getItem("jobs")),
    loading: false,
    application: JSON.parse(localStorage.getItem("application")),
    auth: JSON.parse(localStorage.getItem("auth")),
  },
  reducers: {
    StoreApplication: (state, action) => {
      state.application = action.payload;
    },
    authentication: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: {
    [getAlljobs.pending]: (state, action) => {
      console.log("pending");
      state.loading = true;
    },
    [getAlljobs.fulfilled]: (state, action) => {
      state.loading = false;
      const data = action.payload;
      state.jobs = data;
      localStorage.setItem("jobs", JSON.stringify(data));
      console.log("fulfilled");
    },
    [getAlljobs.rejected]: (state) => {
      state.loading = false;
      console.log("failed");
    },
  },
});
export default jobsSlice.reducer;
export const jobAction = jobsSlice.actions;
