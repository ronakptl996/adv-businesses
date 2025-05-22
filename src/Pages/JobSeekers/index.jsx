import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./index.css";

const jobTypes = ["Full-time", "Part-time", "Internship", "Remote"];

const ProfileSubmission = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    location: "",

    // Professional Information
    title: "",
    experience: "",
    skills: "",
    industries: "",
    jobType: "",

    // Resume & Documentations
    resumeLink: "",
    portfolioLink: "",

    // Education Information (multiple)
    education: [
      {
        degree: "",
        institution: "",
        graduationYear: "",
        fieldOfStudy: "",
      },
    ],

    // Work Experience (multiple)
    workExperience: [
      {
        jobTitle: "",
        company: "",
        duration: "",
        responsibilities: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle education inputs
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData((prev) => ({ ...prev, education: updatedEducation }));
  };

  // Add new education entry
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", institution: "", graduationYear: "", fieldOfStudy: "" },
      ],
    }));
  };

  // Remove education entry
  const removeEducation = (index) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, education: updatedEducation }));
  };

  // Handle work experience inputs
  const handleWorkChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWork = [...formData.workExperience];
    updatedWork[index][name] = value;
    setFormData((prev) => ({ ...prev, workExperience: updatedWork }));
  };

  // Add new work experience entry
  const addWorkExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        { jobTitle: "", company: "", duration: "", responsibilities: "" },
      ],
    }));
  };

  // Remove work experience entry
  const removeWorkExperience = (index) => {
    const updatedWork = formData.workExperience.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, workExperience: updatedWork }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add your submission logic here (API call etc.)
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ maxWidth: 900, margin: "auto", p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Submit Your Job Seeker Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Personal Information
          </Typography>
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>

          {/* Professional Information */}
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Professional Information
          </Typography>
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Job Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Years of Experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Skills (comma separated)"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Industries"
                name="industries"
                value={formData.industries}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <FormControl fullWidth sx={{ mt: "15px" }}>
                <InputLabel>Preferred Job Type</InputLabel>
                <Select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  label="Preferred Job Type"
                >
                  {jobTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Resume & Documentations */}
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Resume & Documentations
          </Typography>
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Resume Link"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleChange}
                fullWidth
                placeholder="https://example.com/yourresume.pdf"
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                label="Portfolio Link"
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleChange}
                fullWidth
                placeholder="https://yourportfolio.com"
              />
            </Grid>
          </Grid>

          {/* Education Information */}
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Education Information
          </Typography>
          {formData.education.map((edu, idx) => (
            <Paper
              key={idx}
              variant="outlined"
              sx={{ p: 2, mb: 2, position: "relative" }}
            >
              {formData.education.length > 1 && (
                <IconButton
                  onClick={() => removeEducation(idx)}
                  sx={{ position: "absolute", top: 8, right: 8 }}
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              )}
              <Grid container spacing={1} mt={2}>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField
                    label="Degree"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(idx, e)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField
                    label="Institution"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(idx, e)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField
                    label="Graduation Year"
                    name="graduationYear"
                    type="number"
                    value={edu.graduationYear}
                    onChange={(e) => handleEducationChange(idx, e)}
                    fullWidth
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField
                    label="Field of Study"
                    name="fieldOfStudy"
                    value={edu.fieldOfStudy}
                    onChange={(e) => handleEducationChange(idx, e)}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={addEducation}
          >
            Add Education
          </Button>

          {/* Work Experience */}
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Work Experience
          </Typography>
          {formData.workExperience.map((work, idx) => (
            <Paper
              key={idx}
              variant="outlined"
              sx={{ p: 2, mb: 2, position: "relative" }}
            >
              {formData.workExperience.length > 1 && (
                <IconButton
                  onClick={() => removeWorkExperience(idx)}
                  sx={{ position: "absolute", top: 8, right: 8 }}
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              )}
              <Grid container spacing={1} mt={2}>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField
                    label="Job Title"
                    name="jobTitle"
                    value={work.jobTitle}
                    onChange={(e) => handleWorkChange(idx, e)}
                    fullWidth
                    required
                    className="custom-textfield-mui"
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField
                    label="Company"
                    name="company"
                    value={work.company}
                    onChange={(e) => handleWorkChange(idx, e)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField
                    label="Duration"
                    name="duration"
                    value={work.duration}
                    onChange={(e) => handleWorkChange(idx, e)}
                    fullWidth
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField
                    label="Responsibilities / Achievements"
                    name="responsibilities"
                    value={work.responsibilities}
                    onChange={(e) => handleWorkChange(idx, e)}
                    rows={3}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={addWorkExperience}
          >
            Add Work Experience
          </Button>

          {/* Submit Button */}
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
            >
              Submit Profile
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ProfileSubmission;
