import "./lyrics-songicon.css"
import image from "./song-cover-images/1.jpg";

function Lyricssongicon({song}){
    if (!song) return null;
    return(
        <div className="lyricspage-songtile-container">
            <img src={song.artworkUrl100.replace('100x100bb', '600x600bb')} alt="Song cover" className="lyricssongtile-cover"/>
            <div className="lyricssongtile-songinfo">
                <h3 className="lyricssongtile-name">{song.trackName}</h3>
                <p className="lyricssongtile-artist">{song.artistName}</p>
            </div>
            
        </div>
    );
}

export default Lyricssongicon;