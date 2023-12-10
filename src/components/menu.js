import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./menu.css";

export function Menu(){
    const [menu, setMenu] = useState(false);
    const [apply, setApply] = useState(false);
    const [widgetColor, setColor] = useState(localStorage.getItem("widgetColor"))
    

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const handleWidgetColorChange = (e) => {
        
        localStorage.setItem("widgetColor", e.hex)
        setColor(prev => {return e.hex})
        
        
        
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
                            <SketchPicker
                            id="colorChange" 
                            color={widgetColor}
                            onChange={handleWidgetColorChange}
                            />
                            <button id="colorChange">Apply</button>
                            <div className="menuRow">
                                <h2>Section 2</h2>
                                <p>Dialog about options</p>
                            </div>
                            <div className="menuRow">
                                <h2>Section 2</h2>
                                <p>Dialog about options</p>
                            </div>
                            <div className="menuRow">
                                <h2>Section 2</h2>
                                <p>Dialog about options</p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
            )}
        </>
    );
}