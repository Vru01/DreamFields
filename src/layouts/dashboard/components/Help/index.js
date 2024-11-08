import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function HelpCard() {
  return (
    <Card
      sx={{
        display: 'flex',
        width: 350,
        height: 500,
        borderRadius: 2,
        boxShadow: 3,
        marginLeft: 1,
      }}
    >
      {/* Left side for image */}
      <CardMedia
        component="img"
        sx={{ width: '30%' }}
        image="https://st.depositphotos.com/1770836/1372/i/450/depositphotos_13720689-stock-photo-young-businesswoman.jpg" // Replace with actual image URL
        alt="Psychologist"
      />
      {/* Right side for text content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2,
          width: '50%',
        }}
      >
        <CardContent>
          <Typography component="div" variant="h6">
            Dr. Jane Doe
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            Psychologist
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            Phone: (123) 456-7890
          </Typography>
        </CardContent>
      </Box>
        
    </Card>
  );
}
