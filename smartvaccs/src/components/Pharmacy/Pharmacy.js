import React from 'react';
import './PharmacyStyles.css';

const Pharmacy = () => {
  return (
    <div>
      <div class="row">
        <div class="column">
          <div class="Pfizer">
            <h2 class="pfizertitle">Pfizer</h2>
            <img class="logos" src="./Doses.png"></img>
            <p>
              {' '}
              Doses Left: 6 <br></br>
              <img class="logos" src="./Refill.png"></img>Refill Date: Jan 19th
            </p>
          </div>
          <div class="Moderna">
            <h2>Moderna</h2>
            <img class="logos" src="./Doses.png"></img>
            <p>
              Doses Left: 6<br></br>
              <img class="logos" src="./Refill.png"></img>Refill Date: Jan 22nd
            </p>
          </div>
          <div class="AstraZeneca">
            <h2>Astra Zeneca</h2>
            <img class="logos" src="./Doses.png"></img>
            <p>
              Doses Left: 6<br></br>
              <img class="logos" src="./Refill.png"></img>Refill Date: Jan 29th
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
  );
};

export default Pharmacy;
