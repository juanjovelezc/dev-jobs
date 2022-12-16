import React from "react";
import JobDetails from "../components/JobDetails";
import JobLists from "../components/JobLists";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function routes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<JobLists />} />
          <Route exact path="/jobs" element={<JobLists />} />
          <Route exact path="/jobs/:position" element={<JobDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default routes;
