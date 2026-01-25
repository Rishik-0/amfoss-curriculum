import "./playlist-songs-tile.css"
import { BsThreeDotsVertical } from "react-icons/bs";

function Playlistsongtile({onClick,song_name,song_artist,song_icon}){
    return(
        <div className="Playlistpage-songtile-container" onClick={onClick}>
            <img src={song_icon} alt="Song cover" className="playlistsongtile-cover"/>
            <div className="playlistsongtile-songinfo">
                <p className="Playlistsongtile-name">{song_name}</p>
                <p className="Playlistsongtile-artist">{song_artist}</p>
            </div>
            <div className="Playlistsongtile-threedots">
                <BsThreeDotsVertical size={25}/>
            </div>
        </div>
    );
}

export default Playlistsongtile;