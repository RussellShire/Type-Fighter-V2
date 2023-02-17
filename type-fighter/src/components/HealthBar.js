import React from 'react'
import '../App.css'
const HealthBar = () => {
    const health = 70 // placeholder for prop
    const healthCss = "translateX(-" + 100 - health + "%)"

    return (
        <div class="health-bar-outer"
             style={{
                 width:"10rem",
                 height:"1rem",
                 margin:"1rem",
                 border:"black solid",
                 overflow:"hidden",
        }}>
            <div class="health-bar-inner"
                 style={{
                     width:"10rem",
                     height:"1rem",
                     transform:healthCss,
                     // transform: "translateX(-50%)",
                     backgroundColor:"red"
                 }}>

            </div>
        </div>
    )
}

export default HealthBar
