/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import ProfileInfoCard from 'examples/Cards/InfoCards/ProfileInfoCard';
import ProfilesList from 'examples/Lists/ProfilesList';
import DefaultProjectCard from 'examples/Cards/ProjectCards/DefaultProjectCard';

// Overview page components
import Header from 'layouts/profile/components/Header';
import PlatformSettings from 'layouts/profile/components/PlatformSettings';

// Data
import profilesListData from 'layouts/profile/data/profilesListData';

// Images
import Astronomy from 'assets/images/astronomy.webp';
import homeDecor2 from 'assets/images/psychology.jpeg';
import homeDecor3 from 'assets/images/robotics.jpeg';
import homeDecor4 from 'assets/images/forest.png';
import team1 from 'assets/images/team-1.jpg';
import team2 from 'assets/images/team-2.jpg';
import team3 from 'assets/images/team-3.jpg';
import team4 from 'assets/images/team-4.jpg';

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={8} sx={{ display: 'flex' }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: 'Alec M. Thompson',
                  mobile: '(44) 123 1234 123',
                  email: 'alecthompson@mail.com',
                  location: 'USA',
                }}
                social={[
                  {
                    link: 'https://www.facebook.com/CreativeTim/',
                    icon: <FacebookIcon />,
                    color: 'facebook',
                  },
                  {
                    link: 'https://twitter.com/creativetim',
                    icon: <TwitterIcon />,
                    color: 'twitter',
                  },
                  {
                    link: 'https://www.instagram.com/creativetimofficial/',
                    icon: <InstagramIcon />,
                    color: 'instagram',
                  },
                ]}
                action={{ route: '', tooltip: 'Edit Profile' }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={Astronomy}
                label="course #2"
                title="Astronomy"
                description="The study of celestial bodies such as stars, planets, and galaxies, and the universe as a whole."
                action={{
                  type: 'internal',
                  route: '/pages/profile/profile-overview',
                  color: 'info',
                  label: 'view course',
                }}
                authors={[
                  { image: team1, name: 'Elena Morison' },
                  { image: team2, name: 'Ryan Milly' },
                  { image: team3, name: 'Nick Daniel' },
                  { image: team4, name: 'Peterson' },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="course #1"
                title="Psychology"
                description="The scientific study of the mind and behavior, exploring mental processes, emotions, and cognition."
                action={{
                  type: 'internal',
                  route: '/pages/profile/profile-overview',
                  color: 'info',
                  label: 'view course',
                }}
                authors={[
                  { image: team3, name: 'Nick Daniel' },
                  { image: team4, name: 'Peterson' },
                  { image: team1, name: 'Elena Morison' },
                  { image: team2, name: 'Ryan Milly' },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="course #3"
                title="Robotics"
                description="The field focused on the design and operation of robots to perform tasks autonomously or semi-autonomously."
                action={{
                  type: 'internal',
                  route: '/pages/profile/profile-overview',
                  color: 'info',
                  label: 'view course',
                }}
                authors={[
                  { image: team4, name: 'Peterson' },
                  { image: team3, name: 'Nick Daniel' },
                  { image: team2, name: 'Ryan Milly' },
                  { image: team1, name: 'Elena Morison' },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="course #4"
                title="Environmentalist"
                description="An advocate for preservation of the natural environment through sustainable practices."
                action={{
                  type: 'internal',
                  route: '/pages/profile/profile-overview',
                  color: 'info',
                  label: 'view course',
                }}
                authors={[
                  { image: team4, name: 'Peterson' },
                  { image: team3, name: 'Nick Daniel' },
                  { image: team2, name: 'Ryan Milly' },
                  { image: team1, name: 'Elena Morison' },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
