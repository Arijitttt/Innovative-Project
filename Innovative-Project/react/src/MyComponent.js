import React from 'react';
import './MyComponent.css'; 
import { Link } from 'react-router-dom';
import logo from "./Pedestrian crossing-bro (1).png";
function MyComponent() {
  const logostyles = {
    width: '180px',
    height: '80px',
    fontFamily: "Impact",
    flexShrink: 0,
    position: 'absolute',
    color: '#06cc31',
    fontSize: 30,
    top: '25px',
    left: '30px',
  };
  const imagestyles = {
    width: '70px',
    height: '50px',
    top: '100px',
    left: '130px',
    position:"absolute",
  };
  const boxstyles = {
    width: '380px',
    height: '830x',
    flexShrink: 0,
    position:"absolute",
    top: "80px",
    color: '#28FF0D',
  };
  const customStyles2 = {
    width: '718px',
    height: '30x',
    flexShrink: 0,
    color: '#06cc31',
    fontSize: '65px',
    fontWeight: 600,
    position: "absolute",
    top:'230px',
    left: '850px', 
  };
  const customStyles3 = {
    width: '150px',
    height: '35px',
    flexShrink: 0,
    color: 'black',
    position: "absolute",
    fontSize: '20px',
    fontStyle: 'normal',
    lineHeight: 'normal',
    left:"1330px",
    top:"25px"
  };
  const customStyles4 = {
    width: '320px',
    height: '300px',
    flexShrink: 0,
    color: 'Black',
    position: "absolute",
    fontSize: '25px',
    fontWeight: 800,
    fontStyle: 'normal',
    lineHeight: 'normal',
    left:"890px",
    top:"340px"
  };
  const startstyles = {
    width: '160px',
    height: '15px',
    flexShrink: 0,
    color: 'white',
    position: "absolute",
    fontSize: '25px',
    fontWeight: 900,
    lineHeight: 'normal',
    left:"930px",
    top:"420px"
  };
  return (
    <div style={{ position: 'relative'}}>
      <div style={logostyles}>
      <div className='Nav'>INNO WHEELS</div>
    </div>
    <div style={imagestyles}>
    <img src={logo} alt="Icon" className="pedestrian" />
    </div>
    <div style={customStyles3}><div  className='help'>Get Help</div></div>
      <div style={boxstyles}>
        <div  className='green_color'>
        </div>
      </div>
      <div style={customStyles2} className='content'>
          <div>
          INNO WHEELS
          </div>
          </div>
         <div style={customStyles4} className='semicontent'><div >-GET THE WHEELS CHECKED -GET THE TRACK HISTORY</div></div>
         <div style={startstyles} className='start'><div >GET STARTED</div></div>
    </div>
  );
}
export default MyComponent;