import React, { useState } from "react";
import "./menu.css";

export function Menu(){
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
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
                        <p>
                            <p>
                                <h2>Section 1</h2>
                                <p>Dialog about options</p>
                            </p>

                            <p>
                                <h2>Section 2</h2>
                                <p>Dialog about options</p>
                            </p>
                            <p>
                                <h2>Section 3</h2>
                                <p>Dialog about options</p>
                            </p>
                            <p>
                                <h2>Section 4</h2>
                                <p>Dialog about options</p>
                            </p>
                        </p>
                    </div>




                </div>
            </div>
            )}
        </>
    );
}