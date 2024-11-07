import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import "boxicons/css/boxicons.min.css";

// Import MDBox and MDTypography from Material Dashboard
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const Courses = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const fields = [
    {
      title: "Astronomy",
      link: "/astronomy",
      icon: "bx bx-moon",
      phrase: "Reach for the Stars!",
      description:
        "Explore the universe's wonders and expand your horizons with DreamFields' Astronomy module. Dive into the mysteries of celestial bodies, galaxies, and the cosmos, and let your curiosity illuminate the night sky!",
    },
    {
      title: "Psychology",
      link: "/psychology",
      icon: "bx bx-brain",
      phrase: "Unlock the Secrets of the Mind!",
      description:
        "Delve into the fascinating world of Psychology with DreamFields, where you’ll gain insights into human behavior and emotions. Discover the tools to understand yourself and others, fostering personal growth and deeper connections!",
    },
  ];

  const activities = [
    {
      title: "Explore Interests",
      description: "Discover various subjects and find out what piques your curiosity.",
      buttonLabel: "Start Exploring",
      icon: "bx bx-compass",
      link: "/explore-interests",
    },
    {
      title: "Take a Quiz",
      description: "Answer simple questions to see which field suits you the most.",
      buttonLabel: "Start Quiz",
      icon: "bx bx-question-mark",
      link: "/quiz",
    },
    {
      title: "View Progress",
      description: "Check your quiz scores and learn how your interests have evolved.",
      buttonLabel: "Check Progress",
      icon: "bx bx-bar-chart",
      link: "/progress",
    },
    {
      title: "Recommendations",
      description: "Get suggestions on fields that match your interests.",
      buttonLabel: "View Recommendations",
      icon: "bx bx-bulb",
      link: "/recommendations",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="background.default">
      <Box flex={1} p={3} bgcolor="background.paper" borderRadius={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
          p={2}
          bgcolor="grey.200"
          borderRadius={1}
        >
          <IconButton onClick={() => setSidebarOpen(true)} sx={{ display: { lg: "none" } }}>
            <i className="bx bx-menu"></i>
          </IconButton>
          <Typography variant="h6">
            Hello{" "}
            <span
              style={{
                fontWeight: 700,
                color: "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
              }}
            >
              REZA
            </span>
            , welcome back!
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
          <MDTypography variant="h4" fontWeight="bold">
            Explore your <span style={{ color: "#3b82f6", fontWeight: "bold" }}>DreamFields</span>
          </MDTypography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Custom Cards Section */}
        <Grid container spacing={3}>
          {fields.map((field, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={4}
                sx={{ "&:hover": { transform: "scale(1.05)" }, transition: "0.3s" }}
              >
                <CardContent>
                  <Box display="flex">
                    <Box flex={1}>
                      <MDTypography variant="h6" fontWeight="bold" color="primary.main">
                        {field.title}
                      </MDTypography>
                      <MDTypography variant="subtitle1" color="primary.light">
                        {field.phrase}
                      </MDTypography>
                      <MDTypography variant="body2" color="text.secondary">
                        {field.description}
                      </MDTypography>
                    </Box>
                    <Box fontSize="2rem" color="sky" ml={2}>
                      <i className={field.icon}></i>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, bgcolor: "primary.main", color: "white" }}
                    component={Link}
                    to={field.link}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Activities Section */}
        <Box my={4}>
          <MDTypography variant="h6" mb={2}>
            Activities
          </MDTypography>
          <Grid container spacing={3}>
            {activities.map((activity, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={2}
                  sx={{ "&:hover": { backgroundColor: "grey.100" }, transition: "0.3s" }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center">
                      <Box fontSize="2rem" color="primary.dark" mr={2}>
                        <i className={activity.icon}></i>
                      </Box>
                      <Box flex={1}>
                        <MDTypography variant="h6" color="primary.main">
                          {activity.title}
                        </MDTypography>
                        <MDTypography variant="body2" color="text.secondary">
                          {activity.description}
                        </MDTypography>
                      </Box>
                    </Box>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="black"
                      sx={{ mt: 2 }}
                      onClick={() => (window.location.href = activity.link)}
                    >
                      {activity.buttonLabel}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
