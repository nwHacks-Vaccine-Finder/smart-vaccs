import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './PharmacyStyles.css';
import axios from 'axios';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Headers, Origin,Accept, Content-Type, ',
  },
};

const Pharmacy = (props) => {
  const ClinicName = 'Rexall Pharmacy';
  const ClinicAddress = '499 Granville St, Vancouver, BC V6C 1T1';
  const [open, setOpen] = useState(true);
  const [pharmacy, setPharmacy] = useState({});
  async function getPharmacyById(id) {
    const response = await axios.get(
      `http://localhost:8000/pharmacies/${id}`,
      config
    );
    console.log(response.headers.status);
    response.headers.status === 404 ? setOpen(true) : setPharmacy(response);
  }
  useEffect(() => {
    if (props.auth.isSignedIn !== true) {
      return <Navigate to="/" />;
    }
    getPharmacyById(props.auth.userId);
  }, []);

  return (
    <div class="page">
      {/* <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add your Pharmacy's Information</DialogTitle>
        <DialogContent>
          <DialogContentText>To</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog> */}
      <div class="leftSide">
        <div class="row">
          <div class="column">
            <div class="Pfizer">
              <h2 class="pfizertitle">Pfizer</h2>
              <img class="logos" src="./Doses.png"></img>
              <p>
                Doses Left: 6 <br></br>
                <img class="logos" src="./Refill.png"></img>Refill Date: Jan
                19th
              </p>
            </div>
            <div class="Moderna">
              <h2>Moderna</h2>
              <img class="logos" src="./Doses.png"></img>
              <p>
                Doses Left: 6<br></br>
                <img class="logos" src="./Refill.png"></img>Refill Date: Jan
                22nd
              </p>
            </div>
            <div class="AstraZeneca">
              <h2>Astra Zeneca</h2>
              <img class="logos" src="./Doses.png"></img>
              <p>
                Doses Left: 6<br></br>
                <img class="logos" src="./Refill.png"></img>Refill Date: Jan
                29th
              </p>
            </div>
            <div class="PfizerPED">
              <h2>Pfizer (PED)</h2>
              <img class="logos" src="./Doses.png"></img>
              <p>
                Doses Left: 6<br></br>
                <img class="logos" src="./Refill.png"></img>Refill Date: Feb 3rd
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rightSide">
        <div className="clinicInfo">
          <div className="clinicName">{ClinicName}</div>
          <div className="clinicAddress">{ClinicAddress}</div>
        </div>
        <div className="dosesHistory">
          <div className="dosesTitle">Doses History</div>
          <div className="tempGraph">
            <img id="graph" src={"./graph.png"} alt="" />
          </div>
          
        </div>
        <div className="recentUsersCard">
          <div className="recentUsersTitle">Recent Users</div>
          <div className="userImages">
            <img id="pfp"
              src={'./profile_pic.png'}
              alt=""
              width="140px"
              height="140px"
            />
            <img id="pfp"
              src={'./profile_pic.png'}
              alt=""
              width="140px"
              height="140px"
            />
            <img id="pfp"
              src={'./profile_pic.png'}
              alt=""
              width="140px"
              height="140px"
            />
            <img id="pfp"
              src={'./profile_pic.png'}
              alt=""
              width="140px"
              height="140px"
            />
            <img id="pfp"
              src={'./profile_pic.png'}
              alt=""
              width="140px"
              height="140px"
            />
            <img id="pfp"
              src={'./profile_pic.png'}
              alt=""
              width="140px"
              height="140px"
            />
            <img id="pfp"
              src={'./profile_pic.png'}
              alt=""
              width="140px"
              height="140px"
            />
            <img id="pfp"
              src={'./profile_pic.png'}
              alt=""
              width="140px"
              height="140px"
            />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Pharmacy);
