import "./searchbar.css"
import { IoSearch } from "react-icons/io5";

function Searchbar(){
    return(
        <div className="sidebar">
            <form>
                <div className="Searchbar-container" >
                    
                    <input type="text" placeholder="Search" className="Search-box"/>
                    <IoSearch />
                </div>

            </form>
        </div>
    
    );
}

export default Searchbar;