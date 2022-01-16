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
        <Link
          onClick={(event) =>
            props.auth.isSignedIn === true ? null : event.preventDefault
          }
          to="/user"
        >
          <button className="landing-page-btn" id="user" type="submit">
            I'm a user!
          </button>
        </Link>
        <Link
          onClick={(event) =>
            props.auth.isSignedIn === true ? null : event.preventDefault
          }
          to="/pharmacy"
        >
          <button className="landing-page-btn" id="pharmacy" type="submit">
            I'm a pharmacy!
          </button>
        </Link>
      </Stack>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(LandingPage);
