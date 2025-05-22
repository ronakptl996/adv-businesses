import React from "react";
import { Button, Typography, Grid, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import "./JobsHomePage.css";

const jobSections = [
  {
    title: "Add Job Vacancy",
    description: "Post a new job opportunity and attract top talent.",
    buttonText: "Add Job",
    route: "/add-job",
    bgImage: "/images/add-job.jpg",
  },
  {
    title: "View All Jobs",
    description: "Browse all available job listings posted by employers.",
    buttonText: "Browse Jobs",
    route: "/all-jobs",
    bgImage: "/images/all-jobs.jpg",
  },
  {
    title: "Job Seekers",
    description:
      "Add or update your job profile to be discovered by employers.",
    buttonText: "Add Profile",
    route: "/job-seekers",
    bgImage: "/images/job-seekers.jpg",
  },
  {
    title: "Talent Pool",
    description:
      "Explore talented professionals. Publicly visible job profiles.",
    buttonText: "View Talent",
    route: "/talent-pool",
    bgImage: "/images/talent-pool.jpg",
  },
];

const JobsHomePage = () => {
  // const navigate = useNavigate();

  return (
    <div className="jobs-home-container">
      <header className="hero-section">
        <div className="hero-overlay">
          <Typography variant="h3" className="hero-title">
            Find Work. Hire Smart.
          </Typography>
          <Typography variant="subtitle1" className="hero-subtitle">
            Your gateway to top talent and career opportunities.
          </Typography>
        </div>
      </header>

      <Grid container spacing={4} className="section-grid">
        {jobSections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              className="light-card"
              style={{ backgroundImage: `url(${section.bgImage})` }}
              //   onClick={() => navigate(section.route)}
            >
              <div className="card-content">
                <Typography variant="h5" className="card-title">
                  {section.title}
                </Typography>
                <Typography variant="body2" className="card-desc">
                  {section.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className="card-button"
                >
                  {section.buttonText}
                </Button>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default JobsHomePage;
