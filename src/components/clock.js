import { useState } from "react";
import Draggable from "react-draggable";
import './clock.css';

export function Clock({ color }) {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <Draggable>
            <div className="clock">
                <h1 id="time">{currentTime}</h1>
            </div>
        </Draggable>
    )
}

export default Clock;