import "./playlist-songs-tile.css"
import image from "./song-cover-images/1.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";

function Playlistsongtile(){
    return(
        <div className="Playlistpage-songtile-container">
            <img src={image} alt="Song cover" className="playlistsongtile-cover"/>
            <div className="playlistsongtile-songinfo">
                <p className="Playlistsongtile-name">Song Name</p>
                <p className="Playlistsongtile-artist">Artist</p>
            </div>
            <div className="Playlistsongtile-threedots">
                <BsThreeDotsVertical size={25}/>
            </div>
        </div>
    );
}

export default Playlistsongtile;