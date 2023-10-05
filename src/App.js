import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import JobDetails from "./pages/JobDetails";
import SubmitPage from "./pages/SubmitPage";
import PrivateRoute from "./utils/PrivateRouter";
import PreventGoBack from "./utils/PreventGoBack";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PreventGoBack>
              <AuthPage />
            </PreventGoBack>
          }
        />
        <Route
          path="/landingpage"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />
        <Route path="/jobsDetails/:jobId" element={<JobDetails />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </div>
  );
}

export default App;
