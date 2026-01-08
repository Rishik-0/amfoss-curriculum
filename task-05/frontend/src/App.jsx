import './App.css'
import Login from "./login/login.jsx"
import Signin from './signin/signin.jsx'
import Home from "./homepage/home.jsx"
import Playlists from './playlists/playlists.jsx'
import Playlist from './playlist/playlist.jsx'
import MusicPlayer from './music-player/music-player.jsx'
import LyricsPlayer from './lyrics-player/lyrics-player.jsx'
import {Routes, Route} from "react-router-dom"
// import MiniSidebar from './components/mini-sidebar.jsx'
function App() {
  return (
    <main className = "main-content">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signin/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/playlists" element={<Playlists/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/musicplayer" element={<MusicPlayer/>}/>
        <Route path="/lyricsplayer" element={<LyricsPlayer/>}/>
        {/* <Route path="/minisidebar" element={<MiniSidebar/>}/> */}
      </Routes>
    </main>
  );
}



export default App;
