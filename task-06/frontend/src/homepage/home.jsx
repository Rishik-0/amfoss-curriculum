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
import{useState, useEffect} from 'react'
import "./home.css"



function Home({userid,onSongSelect,currentSong,isPlaying,onToggle,playlists}){
    const[songdata,setsongData] = useState([])
    const[search_term,setSearch_term] = useState('')
    const[issearching,setIssearching] = useState(false)

    const handle_search = (query) => {
        setSearch_term(query);
        setIssearching(!!query);
    }

    useEffect(() => {
        const url = issearching && search_term ? `http://127.0.0.1:5000/api/songs?search_song=${encodeURIComponent(search_term)}`:
        "http://127.0.0.1:5000/api/songs";
        fetch(url)
        .then(
            res => res.json()
        ).then(
            data => {
                setsongData(data.results) 
                console.log(data.results)
            }
        )
    },[issearching,search_term])
    
    
    return(
        <div> 
            <div className="homepage-main-container">
                <div className="homepage-song-suggestions-container">
                    <h2>{issearching ? `showing results for ${search_term}`:"Song Suggestions"}</h2>
                    <div className="homepage-song-suggestions">
                            {
                            songdata.map((song) =>(
                            <SuggestionCard
                            key = {song.trackId}
                            singer = {song.artistName}
                            songName = {song.trackName}
                            songBanner={song.artworkUrl100.replace('100x100bb', '600x600bb')}
                            onSelect={() => onSongSelect(song)}
                            />
                        ))
                        
}
                    </div>
                </div>
                <div className="homepage-playlist-suggestion-container">
                    <h2>Playlists</h2>
                    <div className="homepage-playlists">
                        {playlists.map((playlist) => (
                        <PlaylistCard
                        playlist_id = {playlist.id}
                        playlist_name = {playlist.name}
                        />))}
                        
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
            </div>   
            <div className="Homepage-components">
                
                <Sidebar/>
                <Player userid = {userid} playlists = {playlists} song={currentSong} isPlaying={isPlaying} onToggle={onToggle}/>
                
                    
                
                
                
                     
            </div>
            <div className="Homepage-top">
                
                <div className="Homepage-melofilogo-container">
                    <img src={logo} alt = "MeloFi logo" className="Homelogo-image Home-logo" />
                    <h3 className="Homelogo-title Home-logo">MeloFi</h3>
                </div>
                
                    <Searchbar onSearch = {handle_search}/>
                
                
            </div>
            
            
               
        </div>
        
    
        
    );
}

export default Home;