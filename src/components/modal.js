import React, { useState } from "react";
import "./modal.css";

export function Modal(){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <button onClick={toggleModal}
            className="buttonToggle">
                Open
            </button>

            {modal && (

            
            <div className="modal">
                <div className="overlay">
                </div>
                <div className="modalContent">
                    <h2>Modal header</h2>
                    <p>modal content</p>
                    <button className="closeModal" 
                    onClick={toggleModal}
                    >Close</button>
                </div>
            </div>
            )}
        </>
    );
}