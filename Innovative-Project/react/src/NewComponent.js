import React from 'react';
import './MyComponent.css'; 
import img from "./8261.jpg";
import img2 from "./8490241.jpg";
import img1 from "./navigation-solid-24.png";
import img3 from "./cloud-regular-24.png";
function NewComponent() {
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
      const customStyles = {
        width: '850px',
        height: '200px',
        flexShrink: 0,
        color: 'Black',
        position: "absolute",
        fontSize: '43px',
        fontWeight: 650,
        fontStyle: 'normal',
        lineHeight: 'normal',
        left:"400px",
        top:"150px"
      };
      const imagestyles1={
        height:"500px",
        width: "500px",
        position: "absolute",
        left: "250px",
        top:"250px",
      }
      const imagestyles2={
        height:"500px",
        width: "500px",
        position: "absolute",
        left: "930px",
        top:"250px",
      }
      const customStyles4 = {
        width: '320px',
        height: '300px',
        flexShrink: 0,
        color: '#06cc31',
        position: "absolute",
        fontSize: '40px',
        fontWeight: 650,
        fontStyle: 'normal',
        lineHeight: 'normal',
        left:"310px",
        top:"620px"
      };
      const imagestyles3={
        height:"70px",
        width: "50px",
        position: "absolute",
        left: "525px",
        top:"640px",
      }
      const customStyles5 = {
        width: '320px',
        height: '300px',
        flexShrink: 0,
        color: '#06cc31',
        position: "absolute",
        fontSize: '40px',
        fontWeight: 650,
        fontStyle: 'normal',
        lineHeight: 'normal',
        left:"980px",
        top:"620px"
      }
      const imagestyles4={
        height:"70px",
        width: "50px",
        position: "absolute",
        left: "1270px",
        top:"640px",
      };
    return (
        <div style={{ position: 'relative'}}>
          <div style={logostyles}>
          <div className='Nav'>INNO WHEELS</div>
        </div>
        <div style={customStyles3}><div  className='help'>Get Help</div></div>
        <div style={customStyles} className='Option'><div >Choose What You Want To Know!</div></div>
        <div style={imagestyles1}><img src={img} alt="Icon" className="navigator" />
    </div>
    <div style={imagestyles2}><img src={img2} alt="Icon" className="navigator" />
    </div>
    <div style={customStyles4} ><div >Navigation</div></div>
    <div style={imagestyles3}><img src={img1} alt="Icon" />
    </div>
    <div style={customStyles5} ><div >CO2 Prediction</div></div>
    <div style={imagestyles4}><img src={img3} alt="Icon" />
    </div>
    </div>
    
  );
}
export default NewComponent;