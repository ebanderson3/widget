import "./searchBar.css";
import Draggable from "react-draggable";
import { useState } from "react";

export function SearchBar() {
    const [draggable, setDraggable] = useState(false);

    const search = (e) => {
        if (e.keyCode === 13) {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(e.target.value);
        }
    }

    return (
        <Draggable axis={draggable}>
            <div className="SearchBar">
                <input type="text" placeholder="Search with Google" onKeyDown={(e) => search(e)}></input>
            </div>
        </Draggable>
    )
}

export default SearchBar;