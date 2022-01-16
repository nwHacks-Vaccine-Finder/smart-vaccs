import React from 'react';
import "./ClinicCard.css"

const User = () => {
  var clinicName = "Rexall Pharmacy"
  var clinicAddress = "696 Belmont Ave W"
  var clinicDoses = "6"
  var clinicInLine = "4"
  var clinicWaitTime = "12"
  return (
    <div style={{padding: "40px"}}>
      <div className="infoCard">
        <div className="titleCard">
          <img src={"/pharmacyflag.png"} alt="" width="150px" height="150px"/>
          <div className="clinicName">
            
            <div className="titleFont">
              {clinicName}
            </div>
            <div className="addressFont">
              {clinicAddress}
            </div>
            
          </div>  
        </div>
        <div className="clinicStats">
          <div className="card1">
            <div className="largeStat">
              {clinicDoses}
            </div>
          </div>
          <div className="card2">
            <div className="largeStat">
              {clinicInLine}
            </div>
          </div>
          <div className="card3">
            <div className="largeStat" >
              {clinicWaitTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
