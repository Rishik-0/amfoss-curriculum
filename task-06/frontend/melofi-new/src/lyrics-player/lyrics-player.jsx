import "./lyrics-player.css"
import logo from "../assets/sound-waves.png";
import { FaRegHeart, FaRotateLeft } from "react-icons/fa6";
import { FaPause, FaPlay } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { MdAddCircleOutline } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Lyricssongicon from "../components/lyrics-songicon";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

function LyricsPlayer({currentSong,isPlaying,onToggle}){
    return(
        <div className="lyrics-player">
            
            <div><Lyricssongicon song={currentSong}/></div>
            <Link to='/musicplayer'><button className="musicplayer-return-button">PLAYER</button></Link>
            <div className="lyricsplayer-allcontrols">
                <progress className="lyricsplayer-progress-bar" max={100} value={70} color="#3e026b" ></progress>
                
                <div className="lyricsplayer-playbackcontrols">
                    <div className="lyricsplayer-back-button"><FaBackwardStep size={30}/></div>
                    <div className="lyricsplayer-pause-button" onClick={onToggle} style={{ cursor: 'pointer'}}>{isPlaying ? <FaPause size={30}/> : <FaPlay size={30}/>}</div>
                    <div className="lyricsplayer-next-button"><FaForwardStep size={30}/></div>
                </div>
                <div className="lyricsplayer-otheroptions">
                    <div className="lyricsplayer-like-button"><FaRegHeart size={20}/></div>
                    <div className="lyricsplayer-add-button"><MdAddCircleOutline size={25}/></div>
                    <div className="lyricsplayer-share-button"><IoShareSocial size={25}/></div>
                    <div className="lyricsplayer-other-button"><BsThreeDotsVertical size={25}/></div>
                </div>

            </div>
            <div className="lyrics-display-section"></div>
               <div className="LyricsPlayer-melofilogo-container">
                    <img src={logo} alt = "MeloFi logo" className="LyricsPlayer-logo-image" />
                    <h3 className="LyricsPlayer-logo-name">MeloFi</h3>
                </div >
            <Link to='/home' style={{ textDecoration: 'none',color:"black"}}><div className="close-lyricsplayer-button"><IoIosClose size={33}/> </div></Link>
            
        </div>
    );
}

export default LyricsPlayer;