import React from 'react'
import '../App.css'
const HealthBar = ({health}) => {
    // const health = 70 // placeholder for prop
    const healthCss = "translateX(-" + (100 - parseInt(health)) + "%)"

    return (
        <div className="health-bar-outer"
             style={{
                 width:"10rem",
                 height:"1rem",
                 margin:"1rem",
                 border:"black solid",
                 overflow:"hidden",
        }}>
            <div className="health-bar-inner"
                 style={{
                     width:"10rem",
                     height:"1rem",
                     transform:healthCss,
                     backgroundColor:"red"
                 }}>
            </div>
        </div>
    )
}

export default HealthBar
