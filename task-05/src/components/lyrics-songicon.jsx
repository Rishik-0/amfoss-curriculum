import "./lyrics-songicon.css"
import image from "./song-cover-images/1.jpg";

function Lyricssongicon(){
    return(
        <div className="lyricspage-songtile-container">
            <img src={image} alt="Song cover" className="lyricssongtile-cover"/>
            <div className="lyricssongtile-songinfo">
                <h3 className="lyricssongtile-name">Song Name</h3>
                <p className="lyricssongtile-artist">Artist</p>
            </div>
            
        </div>
    );
}

export default Lyricssongicon;