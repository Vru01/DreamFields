import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import 'boxicons/css/boxicons.min.css';

// Import MDBox and MDTypography from Material Dashboard
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

const Courses = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const fields = [
    {
      title: 'Astronomy',
      link: '/astronomy',
      icon: 'bx bx-moon', // Boxicons class for astronomy
      phrase: 'Reach for the Stars!',
      description:
        "Explore the universe's wonders and expand your horizons with DreamFields' Astronomy module. Dive into the mysteries of celestial bodies, galaxies, and the cosmos, and let your curiosity illuminate the night sky!",
    },
    {
      title: 'Psychology',
      link: '/psychology',
      icon: 'bx bx-brain', // Boxicons class for psychology
      phrase: 'Unlock the Secrets of the Mind!',
      description:
        'Delve into the fascinating world of Psychology with DreamFields, where you’ll gain insights into human behavior and emotions. Discover the tools to understand yourself and others!',
    },
    {
      title: 'Robotics',
      link: '/robotics',
      icon: 'bx bx-cog', // Boxicons class for robotics
      phrase: 'Build the Future!',
      description:
        'Step into the exciting realm of Robotics with DreamFields! Learn how to design, build, and program robots that can change the world. Ignite your creativity and technical skills as you bring your ideas to life!',
    },
    {
      title: 'Environmental Science',
      link: '/environmental-science',
      icon: 'bx bx-leaf', // Boxicons class for environmental science
      phrase: 'Protect Our Planet!',
      description:
        "Join DreamFields' Environmental Science module and become an advocate for our planet. Discover the intricacies of ecosystems, sustainability, and conservation efforts that can make a real impact on our world!",
    },
    {
      title: 'Creative Writing',
      link: '/creative-writing',
      icon: 'bx bx-pencil', // Boxicons class for creative writing
      phrase: 'Let Your Imagination Soar!',
      description:
        "Unleash your creativity with DreamFields' Creative Writing module! Explore various genres and styles, develop your unique voice, and learn the art of storytelling that captivates and inspires readers.",
    },
    {
      title: 'Artificial Intelligence',
      link: '/artificial-intelligence',
      icon: 'bx bx-brain', // You can change this icon as needed
      phrase: "Shape Tomorrow's Technology!",
      description:
        'Dive into the world of Artificial Intelligence with DreamFields! Understand the principles of AI, machine learning, and data analysis to harness technology that can revolutionize industries and improve lives.',
    },
    {
      title: 'Mathematics',
      link: '/mathematics',
      icon: 'bx bx-calculator', // Boxicons class for mathematics
      phrase: 'Solve the Puzzle!',
      description:
        "Challenge your mind with DreamFields' Mathematics module! From basic concepts to advanced theories, discover the beauty of numbers and problem-solving techniques that apply to everyday life.",
    },
    {
      title: 'More Fields',
      link: '/more-fields',
      icon: 'bx bx-book', // Boxicons class for more fields
      phrase: 'Expand Your Knowledge!',
      description:
        'Explore a variety of subjects that ignite your passion and curiosity. DreamFields offers a wide range of content designed to inspire and educate, guiding you on your learning journey.',
    },
  ];

  const activities = [
    {
      title: 'Explore Interests',
      description: 'Discover various subjects and find out what piques your curiosity.',
      buttonLabel: 'Start Exploring',
      icon: 'bx bx-compass',
      link: '/explore-interests',
    },
    {
      title: 'Take a Quiz',
      description: 'Answer simple questions to see which field suits you the most.',
      buttonLabel: 'Start Quiz',
      icon: 'bx bx-question-mark',
      link: '/quiz',
    },
    {
      title: 'View Progress',
      description: 'Check your quiz scores and learn how your interests have evolved.',
      buttonLabel: 'Check Progress',
      icon: 'bx bx-bar-chart',
      link: '/progress',
    },
    {
      title: 'Recommendations',
      description: 'Get suggestions on fields that match your interests.',
      buttonLabel: 'View Recommendations',
      icon: 'bx bx-bulb',
      link: '/recommendations',
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
          <IconButton onClick={() => setSidebarOpen(true)} sx={{ display: { lg: 'none' } }}>
            <i className="bx bx-menu"></i>
          </IconButton>
          <Typography variant="h6">
            Hello{' '}
            <span className="text-gradient-to-r from-sky-600 via-pink-500 to-red-500">REZA</span>,
            welcome back!
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
          <MDTypography variant="h4" fontWeight="bold">
            Explore your <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>DreamFields</span>
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
                sx={{ '&:hover': { transform: 'scale(1.05)' }, transition: '0.3s' }}
              >
                <CardContent>
                  <Box display="flex">
                    <Box flex={1}>
                      <MDTypography variant="h3" fontWeight="bold" color="primary.main">
                        {field.title}
                      </MDTypography>
                      <MDTypography variant="subtitle2" color="secondary">
                        {field.phrase}
                      </MDTypography>
                      <MDTypography variant="body2" color="text.secondary">
                        {field.description}
                      </MDTypography>
                    </Box>
                    <Box fontSize="2rem" color="blue" ml={2}>
                      <i className={field.icon}></i>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, color: 'white' }}
                    // color="secondary"
                    component={Link}
                    to={field.link}
                  >
                    <span className="light:text-white">Explore</span>
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
                  sx={{ '&:hover': { backgroundColor: 'grey.100' }, transition: '0.3s' }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="flex-start">
                      <Box fontSize="2rem" color="blue" mr={2}>
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
