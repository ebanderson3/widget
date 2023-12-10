import React, { useState } from "react";
import { ChromePicker } from "react-color";
import rgbHex from "rgb-hex";
import "./menu.css";

export function Menu(){
    const [menu, setMenu] = useState(false);
    const [widgetColor, setColor] = useState(localStorage.getItem("widgetColor"))
    

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const handleWidgetColorChange = (e) => {
        let rgbaToHex = "#" + rgbHex(e.rgb.r, e.rgb.g, e.rgb.b, e.rgb.a)

        localStorage.setItem("widgetColor", rgbaToHex)

        const r = document.querySelector(":root")
        r.style.setProperty('--widgetColor', rgbaToHex)

        setColor(rgbaToHex)
    }

    return (
        <>
            <button onClick={toggleMenu}
            className="buttonToggle">
                Settings       {/*  Replace with image */} 
            </button>

            {menu && (


            <div className="menu">
                <div className="overlay">
                </div>
                <div className="menuContent">
                    <div className="menuHeader">
                        <h2>Settings</h2>
                        <button className="closeMenu" 
                        onClick={toggleMenu}
                        >Close</button>
                    </div>
                    <div className="menuBody">
                        <div className="menuColumn">
                            <div className="menuRow">
                                <h2>Section 1</h2>
                                <p>Dialog about options</p>
                            </div>
                            <button id="colorChange" className="changeWidgetColor">Widget Color</button>
                            <button id="colorChange" className="changeFontColor">Font Color</button>
                            <ChromePicker
                            id="colorChange" 
                            color={widgetColor}
                            onChange={handleWidgetColorChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}