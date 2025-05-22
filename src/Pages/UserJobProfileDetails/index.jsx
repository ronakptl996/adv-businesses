import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  Chip,
  Stack,
  Link,
} from "@mui/material";

const user = {
  fullName: "John Doe",
  email: "john@example.com",
  phone: "1234567890",
  location: "New York, NY",
  title: "Software Engineer",
  experience: 4,
  skills: "JavaScript, React, Node.js",
  jobType: "Full-time",
  website: "https://johndoe.dev",
  resume: File,
  education: [
    {
      degree: "B.Sc Computer Science",
      institution: "XYZ University",
      graduationYear: 2020,
      fieldOfStudy: "Computer Science",
    },
  ],
  experienceList: [
    {
      jobTitle: "Frontend Developer",
      company: "TechCorp",
      duration: "Jan 2021 - Present",
      responsibilities: "Built and maintained UI components...",
    },
  ],
};

const UserProfileView = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ maxWidth: 900, margin: "auto", p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {user.fullName}'s Job Seeker Profile
        </Typography>

        {/* Personal Info */}
        <Section title="Personal Information">
          <Grid container spacing={2}>
            <Field label="Full Name" value={user.fullName} />
            <Field label="Email" value={user.email} />
            <Field label="Phone" value={user.phone} />
            <Field label="Location" value={user.location} />
          </Grid>
        </Section>

        {/* Professional Info */}
        <Section title="Professional Information">
          <Grid container spacing={2}>
            <Field label="Job Title" value={user.title} />
            <Field label="Experience" value={`${user.experience} years`} />
            <Field label="Preferred Job Type" value={user.jobType} />
            <Grid item xs={12}>
              <Field label="Skills">
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {user.skills?.split(",").map((skill) => (
                    <Chip key={skill} label={skill.trim()} />
                  ))}
                </Stack>
              </Field>
            </Grid>
          </Grid>
        </Section>

        {/* Resume & Documents */}
        <Section title="Resume & Documents">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field label="Resume">
                {user.resume ? (
                  <Link
                    // href={URL.createObjectURL(user.resume)}
                    target="_blank"
                    rel="noopener"
                  >
                    View Resume
                  </Link>
                ) : (
                  "No resume uploaded"
                )}
              </Field>
            </Grid>
            <Field label="Portfolio" value={user.website} />
          </Grid>
        </Section>

        {/* Education */}
        <Section title="Education">
          {user.education?.map((edu, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                {edu.degree} - {edu.institution}
              </Typography>
              <Typography variant="body2">
                {edu.fieldOfStudy}, Graduated: {edu.graduationYear}
              </Typography>
              <Divider sx={{ mt: 1 }} />
            </Box>
          ))}
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience">
          {user.experienceList?.map((exp, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">
                {exp.jobTitle} at {exp.company}
              </Typography>
              <Typography variant="body2">{exp.duration}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {exp.responsibilities}
              </Typography>
              <Divider sx={{ mt: 1 }} />
            </Box>
          ))}
        </Section>
      </Paper>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    {children}
  </Box>
);

const Field = ({ label, value, children }) => (
  <Grid item xs={12} sm={6}>
    <Typography variant="subtitle2">{label}</Typography>
    {children ? (
      children
    ) : (
      <Typography variant="body1" sx={{ mb: 1 }}>
        {value || "—"}
      </Typography>
    )}
  </Grid>
);

export default UserProfileView;
