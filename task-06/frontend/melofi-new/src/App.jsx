import './App.css'
import Login from "./login/login.jsx"
import Signin from './signin/signin.jsx'
import Home from "./homepage/home.jsx"
import Playlists from './playlists/playlists.jsx'
import Playlist from './playlist/playlist.jsx'
import MusicPlayer from './music-player/music-player.jsx'
import LyricsPlayer from './lyrics-player/lyrics-player.jsx'
import {Routes, Route} from "react-router-dom"
import { useState, useRef, useEffect } from 'react';
// import MiniSidebar from './components/mini-sidebar.jsx'
function App() {
  const[userid,setUserid] = useState(null)
  const[playlists,setPlaylists] = useState([])
  const [currentSong,setCurrentSong] = useState(null);
  const [isPlaying,setIsPlaying] = useState(false);
  const audioRef = useRef(null)

  
  useEffect(() => {
    if (userid){
      fetch(`http://127.0.0.1:5000/api/playlists?user_id=${userid}`)
      .then(res => res.json())
      .then(data => setPlaylists(data))
      .catch(err => console.error("Error fetching playlists:",err));}
      else{
        setPlaylists([]);
      }
  },[userid]);




  const loadPlaylist = (new_playlist) => {
    setPlaylists((prevPlaylists) => [...prevPlaylists,new_playlist]);
  }



  useEffect(() => {
    if(currentSong){
      setIsPlaying(true);
      audioRef.current.play();
    }
  },[currentSong]);

  useEffect(() => {
    if(!audioRef.current){
      return
    }
    if (isPlaying){
      audioRef.current.play();
    }else{
      audioRef.current.pause();
    }
  },[isPlaying])

  const selectSong = (songData) => {
    setCurrentSong(songData);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <main className = "main-content">
      <audio
      ref={audioRef}
      src={currentSong?.previewUrl}
      onEnded = {() => setIsPlaying(false)}/>

      <Routes>
        <Route path="/" element={<Login onLoginSuccess={(id) => setUserid(id)}/>}/>
        <Route path="/signup" element={<Signin/>}/>
        <Route path="/home" element={<Home userid = {userid} playlists = {playlists} onSongSelect={selectSong} currentSong={currentSong} isPlaying={isPlaying} onToggle={togglePlay}/>}/>
        <Route path="/playlists" element={<Playlists userid = {userid} playlists = {playlists} onPlaylistcreated = {loadPlaylist} currentSong={currentSong} isPlaying={isPlaying} onToggle={togglePlay}/>}/>
        <Route path="/playlist/:id" element={<Playlist onSongSelect={selectSong} userid = {userid} playlists = {playlists} currentSong={currentSong} isPlaying={isPlaying} onToggle={togglePlay}/>}/>
        <Route path="/musicplayer" element={<MusicPlayer userid = {userid} playlists = {playlists} currentSong={currentSong} isPlaying={isPlaying} onToggle={togglePlay}/>}/>
        <Route path="/lyricsplayer" element={<LyricsPlayer userid = {userid} playlists = {playlists} currentSong={currentSong} isPlaying={isPlaying} onToggle={togglePlay}/>}/>
        {/* <Route path="/minisidebar" element={<MiniSidebar/>}/> */}
      </Routes>
    </main>
  );
}



export default App;
