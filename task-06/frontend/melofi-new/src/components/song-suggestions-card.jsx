import "./song-suggestions-card.css"
import image from "./song-cover-images/1.jpg";

function SuggestionCard({singer,songName,songBanner,onSelect}){
    return(
        <div className="song-suggestions-card" onClick={onSelect}>
                <img src={songBanner} alt={songName} className="song-suggestions-cover"/>
                <div className="song-suggestions-title">{songName}</div>
                <div className="song-suggestions-artist">{singer}</div>
        
        </div>
    );
}

export default SuggestionCard;