import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const users = [
  {
    id: "1",
    fullName: "Alice Johnson",
    title: "Frontend Developer",
    location: "San Francisco",
    jobType: "Full-time",
    skills: "React, JavaScript, CSS",
  },
  {
    id: "2",
    fullName: "Bob Smith",
    title: "Backend Engineer",
    location: "Austin",
    jobType: "Remote",
    skills: "Node.js, Express, MongoDB",
  },
];

const TalentPoolGrid = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Talent Pool
      </Typography>

      <Grid container spacing={3}>
        {users.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                p: 2,
                height: "100%",
                width: "100%",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: "#1976d2" }}>
                    {user.fullName?.[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{user.fullName}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.title}
                    </Typography>
                  </Box>
                </Stack>

                <Box mt={2}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex" }}
                  >
                    <LocationOnIcon fontSize="small" sx={{ mr: 1, mb: 0.5 }} />
                    {user.location || "N/A"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex" }}
                  >
                    <BusinessCenterIcon fontSize="small" sx={{ mr: 1 }} />
                    {user.jobType || "Not specified"}
                  </Typography>
                </Box>

                {user.skills && (
                  <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    {user.skills
                      .split(",")
                      .slice(0, 3)
                      .map((skill, i) => (
                        <Chip key={i} label={skill.trim()} size="small" />
                      ))}
                  </Stack>
                )}

                <Box mt={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="small"
                    href={`/profile/${user.id}`}
                  >
                    View Profile
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TalentPoolGrid;
