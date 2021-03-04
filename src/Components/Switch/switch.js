import React, { useState } from "react"
import "./switch.css"

const SwitchButton = (props) => {
    const [check, setCheck] = useState(false)

    const handleClick = () => {
        setCheck(!check)
    }
    
    return (
        <div className={`switch ${props.checked ? "switch-checked" : ""}`} onClick={props.onClick}>
            <div className="switch-button">

            </div>
        </div>
    )
}

export default SwitchButton