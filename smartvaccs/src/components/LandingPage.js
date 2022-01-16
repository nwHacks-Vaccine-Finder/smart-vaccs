import React from 'react';
import { Stack, Button } from '@mui/material';
import './LandingPage.css';
import { fontSize } from '@mui/system';

const LandingPage = () => {
  return (
    <div className="container">
      <Stack
        spacing={5}
        direction="row"
        justifyContent="center"
        style={{ left: '-200px' }}
      >
        <img src={'./vaccine_svg.png'} width="110px" height="110px" />
        <img src={'./Logo.png'} width="600px" />
      </Stack>

      <Stack spacing={5}>
        <Button id="btn" style={{ backgroundColor: '#6247AA' }}>
          I'm a user
        </Button>
        <Button id="btn" style={{ backgroundColor: '#A06CD5' }}>
          I'm a pharmacy
        </Button>
      </Stack>
    </div>
  );
};

export default LandingPage;
