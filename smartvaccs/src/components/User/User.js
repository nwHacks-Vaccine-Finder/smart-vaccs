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
          <img id="flag" src={"/pharmacyflag.png"} alt="" width="110px" height="110px"/>
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
            <div className="largeStat1">
              {clinicDoses}
            </div>
            <div className="smallStat1">
              Doses left
            </div>

          </div>
          <div className="card2">
            <div className="largeStat2">
              {clinicInLine}
            </div>
            <div className="smallStat2">
              People in line
            </div>
          </div>
          <div className="card3">
            <div className="largeStat3" >
              {clinicWaitTime}
            </div>
            <div className="smallStat3">
              Minute wait time*
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
