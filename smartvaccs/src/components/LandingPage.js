import React, { useEffect } from 'react';
import { Stack, Button } from '@mui/material';
import { connect } from 'react-redux';
import './LandingPage.css';
import { fontSize } from '@mui/system';
import { Link } from 'react-router-dom';
import GoogleOAuth from './GoogleOAuth';

const LandingPage = (props) => {
  useEffect(() => {
    console.log(props.auth);
  }, [props.auth.isSignedIn]);
  return (
    <div className="container">
      <GoogleOAuth />
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
<<<<<<< HEAD
        <Link
          onClick={(event) =>
            props.auth.isSignedIn === true ? null : event.preventDefault
          }
          to="/user"
        >
          <Button id="btn" style={{ backgroundColor: '#6247AA' }}>
            I'm a user!
          </Button>
        </Link>
        <Link
          onClick={(event) =>
            props.auth.isSignedIn === true ? null : event.preventDefault
          }
          to="/pharmacy"
        >
          <Button id="btn" style={{ backgroundColor: '#A06CD5' }}>
            I'm a pharmacy!
          </Button>
        </Link>
=======
        <Button id="btn" style={{ backgroundColor: '#6247AA' }}>
          I'm a user
        </Button>
        <Button id="btn" style={{ backgroundColor: '#A06CD5' }}>
          I'm a pharmacy
        </Button>
>>>>>>> d3b3d3f5c3dd09afe3660a460615137c0216cf7a
      </Stack>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(LandingPage);
