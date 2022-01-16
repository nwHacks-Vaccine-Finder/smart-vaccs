import React from 'react';
import './PharmacyStyles.css';

const Pharmacy = () => {
  var clinicName = "Rexall Pharmacy"
  var clinicAddress = "696 Belmont Ave W"
  return (
    <div class="page">
      <div class="leftSide">
        <div class="row">
          <div class="column">
            <div class="Pfizer">
              <h2 class="pfizertitle">Pfizer</h2>
              <img class="logos" src="./Doses.png"></img><p>  Doses Left: 6 <br></br>
              <img class="logos" src="./Refill.png"></img>Refill Date: Jan 19th</p>
            </div>
            <div class="Moderna">
              <h2>Moderna</h2>
              <img class="logos" src="./Doses.png"></img><p>Doses Left: 6<br></br>
              <img class="logos" src="./Refill.png"></img>Refill Date: Jan 22nd</p>
            </div>
            <div class="AstraZeneca">
              <h2>Astra Zeneca</h2>
              <img class="logos" src="./Doses.png"></img><p>Doses Left: 6<br></br>
              <img class="logos" src="./Refill.png"></img>Refill Date: Jan 29th</p>
            </div>
            <div class="PfizerPED">
              <h2>Pfizer (PED)</h2>
              <img class="logos" src="./Doses.png"></img><p>Doses Left: 6<br></br>
              <img class="logos" src="./Refill.png"></img>Refill Date: Feb 3rd</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rightSide">
        <div className="clinicInfo">
          <div className="clinicName">
            {clinicName}
          </div>
          <div className="clinicAddress">
            {clinicAddress}
          </div>
        </div>
        <div className="dosesHistory">
          <div className="dosesTitle">
            Doses History
          </div>
          <div className="tempGraph">
            
          </div>
        </div>
        <div className="recentUsersCard">
          <div className="recentUsersTitle">
            Recent Users
          </div>
          <div className="userImages">
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
            <img src={"./blank_profile_pic.png"} alt="" width="100px" height="100px" />
          </div>
        </div>
      </div>
    </div>
  );

  
};

export default Pharmacy;
