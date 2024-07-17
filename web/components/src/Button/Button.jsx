import React from "react"
import "./Button.css";

export const Button = ({ type = "button", text = "", onClick = () => { }, className = "" }) => {
    return (
        <button type={type} className={`btn ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}