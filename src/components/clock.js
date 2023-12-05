import { useState } from "react";
import './clock.css';

export function Clock({ color }) {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    
    const root = document.querySelector(':root');
    root.style.setProperty('--userColor', color);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="clock">
            <h1 id="time">{currentTime}</h1>
        </div>
    )
}

export default Clock;