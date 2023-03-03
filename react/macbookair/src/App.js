import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Navbar from './components/Navbar';

const s={
  display: "grid",
  gridTemplateColumns: "0.5fr 2fr 2fr 2fr 2fr"
}

const bold={
  fontSize: "30px"
}

const space={
  marginTop: "114px"
}

const greenUl={
  color: "green",
  fontSize: '20px'

}

function App() {
  return (
    <>
    <div style={s}>
      <Navbar/>
      <div className='first'>
          <div><b style={bold}>&nbsp;&nbsp;&nbsp;View Report</b>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Patient Name:<b>&nbsp;&nbsp;&nbsp;David Allen</b></p>
          </div>
      </div>
      <div className='second'>
          <div><p style={space}>Date Uploaded: 04/28/2018 16:05:05</p></div>
      </div>
      <div className='third'>
          <div></div>
      </div>
      <div>
          <div className='fourth'>
            <img src="./images/download.svg"/>
          </div>
      </div>
      </div>
      <div className='middle'>
      <img src='./images/backg.png'/>
      </div>
      <div className='next'>
          <ul className='order'>
            <li> <img src='./images/11.svg'/>&nbsp;&nbsp;</li>
            <li> P WAVE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li> <img src='./images/12.svg'/>&nbsp;&nbsp;</li>
            <li> ST &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li> <img src='./images/13.svg'/>&nbsp;&nbsp;</li>
            <li> T WAVE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li> <img src='./images/14.svg'/>&nbsp;&nbsp;</li>
            <li> FEATURES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li> <img src='./images/15.svg'/>&nbsp;&nbsp;</li>
            <li> MORPHOLOGY</li>
          </ul></div>
          <div className='yes'>
          <u style={greenUl}>Legends </u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Heart Rate Variability Chart</b>
          </div>
          <div className='no'>
            <div>
              <ul className='list'>
                <li>PVC-Premature Ventricular Contractions</li>
                <li>PAC-Premature Atrial Contractions</li>
                <li>Second Degree-Second Degree Type1/Type2</li>
                <li>NB-Noise on Beat</li>
              </ul>
            </div>
            <div>
            <ul className='list'>
                <li>Third Degree-Third Degree AV Block</li>
                <li>P-P Wave</li>
                <li>A!-Noise</li>
                <li>HR-Heart Rate</li>
                <li>E-Event Happening</li>
              </ul>
            </div>
            <div>
            <ul className='list'>
                <li>B-Beat</li>
                <li>BE-May/MayNot PVC</li>
                <li>PE-Definitely PVC</li>
                <li>BL-Beat Looking PVCs</li>
                <li>L-Baseline Change</li>
              </ul>
            </div>
          </div>
    </>
  );
}

export default App;
