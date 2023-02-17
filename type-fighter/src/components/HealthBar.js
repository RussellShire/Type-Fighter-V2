import React from 'react'
import '../App.css'
const HealthBar = ({health}) => {
    // const health = 70 // placeholder for prop
    const healthCss = "translateX(-" + (100 - parseInt(health)) + "%)"

    return (
        <div className="health-bar-outer"
             style={{
                 width:"10rem",
                 height:"1.5rem",
                 margin:"1rem",
                 border:"black solid",
                 overflow:"hidden",
                 borderRadius:"0.5rem"
        }}>
            <div className="health-bar-inner"
                 style={{
                     width:"10rem",
                     height:"1.5rem",
                     transform:healthCss,
                     transition:"1s",
                     backgroundColor:"red"
                 }}>
            </div>
        </div>
    )
}

export default HealthBar
