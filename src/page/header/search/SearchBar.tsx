
function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
            <a href="/advanced-search">Advanced Search</a>
        </div>
    );
}

export default SearchBar;