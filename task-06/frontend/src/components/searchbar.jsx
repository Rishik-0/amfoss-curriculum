import { useState } from "react";
import "./searchbar.css"
import { IoSearch } from "react-icons/io5";


function Searchbar({onSearch}){
    const[query,setQuery] = useState('')

    const handleSearch = (e) => {
        e.preventDefault(); 
        onSearch(query);};
    return(
        <div className="searchbar-wrapper">
            <form onSubmit={handleSearch}>
                <div className="Searchbar-container" >
                    
                    <input type="text" placeholder="Search" className="Search-box" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <IoSearch />
                </div>

            </form>
        </div>
    
    );
};

export default Searchbar;