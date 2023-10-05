import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobsData";
const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});
export default store;
