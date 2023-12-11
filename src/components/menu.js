import React, { useState } from "react";
import { ChromePicker } from "react-color";
import rgbHex from "rgb-hex";
import "./menu.css";
import Draggable from "react-draggable";

export function Menu(){
    const [menu, setMenu] = useState(false);
    const [color, setColor] = useState(localStorage.getItem("widgetColor"))
    const [modifiedColor, setModified] = useState("widget")
    

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const handleWidgetColorChange = (e) => {
        let rgbaToHex = "#" + rgbHex(e.rgb.r, e.rgb.g, e.rgb.b, e.rgb.a)

        localStorage.setItem(modifiedColor + "Color", rgbaToHex)

        const r = document.querySelector(":root")
        r.style.setProperty("--" + modifiedColor + "Color", rgbaToHex)

        setColor(rgbaToHex)
    }

    return (
        <>
            <Draggable>
                <button onClick={toggleMenu}
                className="buttonToggle">
                    Settings       {/*  Replace with image */} 
                </button>
            </Draggable>

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
                                <h2>Change Color</h2>
                                <p>Dialog about options</p>
                            </div>
                            <button id="colorChange" className="changeWidgetColor" onClick={() => setModified("widget")}>Widget Color</button>
                            <button id="colorChange" className="changeFontColor" onClick={() => setModified("font")}>Font Color</button>
                            <ChromePicker
                            id="colorChange" 
                            color={color}
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