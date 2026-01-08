import "./song-suggestions-card.css"
import image from "./song-cover-images/1.jpg";

function SuggestionCard(){
    return(
        <div className="song-suggestions-card">
                <img src={image} alt="Song cover" className="song-suggestions-cover"/>
                <div className="song-suggestions-title">Song Name</div>
                <div className="song-suggestions-artist">Artist</div>
        
        </div>
    );
}

export default SuggestionCard;