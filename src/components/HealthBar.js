import React from 'react'
import '../App.css'
const HealthBar = ({health}) => {
    // const health = 70 // placeholder for prop
    const healthCss = "translateX(-" + (100 - parseInt(health)) + "%)"

    return (
        <div className="health-bar-outer"
             style={{
                 width:"30%",
                 height:"1.5rem",
                 margin:"2rem",
                 border:"black solid",
                 overflow:"hidden",
                 borderRadius:"0.5rem",
                 backgroundColor:"red",
        }}>
            <div className="health-bar-inner"
                 style={{
                     // width:"40%",
                     height:"1.5rem",
                     transform:healthCss,
                     transition:"1s",
                     backgroundColor:"yellow"
                 }}>
            </div>
        </div>
    )
}

export default HealthBar
