import "./searchBar.css";

export function SearchBar() {

    const search = (e) => {
        if (e.keyCode === 13) {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(e.target.value);
        }
    }

    return (
        <div className="SearchBar">
            <input type="text" placeholder="Search with Google" onKeyDown={(e) => search(e)}></input>
        </div>
    )
}

export default SearchBar;