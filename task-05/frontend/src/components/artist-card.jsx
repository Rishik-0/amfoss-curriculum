import "./artist-card.css"
import image from "./song-cover-images/1.jpg";

function ArtistsCard(){
    return(
        <div className="artists-card">
                <img src={image} alt="Song cover" className="artists-cover"/>
                <div className="artists-name">Artist Name</div>
        
        </div>
    );
}

export default ArtistsCard;