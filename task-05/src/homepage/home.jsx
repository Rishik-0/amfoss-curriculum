import Player from "../components/player";
import Sidebar from "../components/sidebar";
import Searchbar from "../components/searchbar";
import logo from "../assets/sound-waves.png";
import MusicCard from "../components/music-card";
import PlaylistCard from "../components/playlist-card";
import ArtistsCard from "../components/artist-card";
import SuggestionCard from "../components/song-suggestions-card";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./home.css"
function Home(){
    
    
    return(
        <div> 
            <div className="homepage-main-container">
                <div className="homepage-listening-history-container">
                    <h2>Listening History</h2>
                    <div className="homepage-listening-history-songs">
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                    </div>

                </div>
                <div className="homepage-playlist-suggestion-container">
                    <h2>Playlists</h2>
                    <div className="homepage-playlists">
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                        <PlaylistCard/>
                    </div>

                </div>
                <div className="homepage-artists-container">
                    <h2>Artists</h2>
                    <div className="homepage-artists">
                        <ArtistsCard/>
                        <ArtistsCard/>
                        <ArtistsCard/>
                        <ArtistsCard/>
                        <ArtistsCard/>
                        <ArtistsCard/>
                        <ArtistsCard/>
                        <ArtistsCard/>
                        <ArtistsCard/>
                        <ArtistsCard/>
                        
                    </div>
                </div>

                <div className="homepage-song-suggestions-container">
                    <h2>Song Suggestions</h2>
                    <div className="homepage-song-suggestions">
                            <SuggestionCard/>
                            <SuggestionCard/>
                            <SuggestionCard/>
                            <SuggestionCard/>
                            <SuggestionCard/>
                            <SuggestionCard/>
                            <SuggestionCard/>
                            <SuggestionCard/>
                            <SuggestionCard/>
                            <SuggestionCard/>
                    </div>
                </div>
                
            </div>   
            <div className="Homepage-components">
                
                <Sidebar/>
                <Player/>
                
                    
                
                
                
                     
            </div>
            <div className="Homepage-top">
                
                <div className="Homepage-melofilogo-container">
                    <img src={logo} alt = "MeloFi logo" className="Homelogo-image Home-logo" />
                    <h3 className="Homelogo-title Home-logo">MeloFi</h3>
                </div>
                <div className="Homepage-searchbar">
                    <Searchbar />
                </div>
                
            </div>
            
            
               
        </div>
        
    
        
    );
}

export default Home;