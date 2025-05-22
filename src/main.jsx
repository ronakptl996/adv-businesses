import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import BusinessPackeages from "./Modal.jsx";
import JobSeekers from "./Pages/JobSeekers/index.jsx";
import MeetTheTalent from "./Pages/MeetTheTalent/index.jsx";
import UserProfileView from "./Pages/UserJobProfileDetails/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/job-seekers" element={<JobSeekers />} />
        <Route path="/talent-pool" element={<MeetTheTalent />} />
        <Route path="/talent-pool-profile" element={<UserProfileView />} />
      </Routes>
    </BrowserRouter>
    {/* <BusinessPackeages /> */}
  </StrictMode>
);
