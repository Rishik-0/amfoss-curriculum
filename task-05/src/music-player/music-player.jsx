import "./music-player.css"
import logo from "../assets/sound-waves.png";
import MusicPlayerIcon from "../components/musicplayer-icon";
import { FaRegHeart, FaRotateLeft } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { MdAddCircleOutline } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
function MusicPlayer(){
    return(
        <div className="music-player">
            
                <div className="MusicPlayer-melofilogo-container">
                    <img src={logo} alt = "MeloFi logo" className="MusicPlayer-logo-image" />
                    <h3 className="MusicPlayer-logo-name">MeloFi</h3>
                </div >
            
            <div className="MusicPlayerpage-songicon"><MusicPlayerIcon/></div>
            
            <div className="musicplayer-allcontrols">
                <progress className="musicplayer-progress-bar" max={100} value={70} color="#3e026b" ></progress>
                
                <div className="Musicplayer-playbackcontrols">
                    <div className="musicplayer-back-button"><FaBackwardStep size={30}/></div>
                    <div className="musicplayer-pause-button"><FaPause size={30}/></div>
                    <div className="musicplayer-next-button"><FaForwardStep size={30}/></div>
                </div>
                <div className="musicplayer-otheroptions">
                    <div className="musicplayer-like-button"><FaRegHeart size={20}/></div>
                    <div className="musicplayer-add-button"><MdAddCircleOutline size={25}/></div>
                    <div className="musicplayer-share-button"><IoShareSocial size={25}/></div>
                    <div className="musicplayer-other-button"><BsThreeDotsVertical size={25}/></div>
                </div>
                
            </div>
            <Link to='/lyricsplayer'><button className="lyrics-page-button">LYRICS</button></Link>
            <Link to='/home' style={{ textDecoration: 'none',color:"black"}}><div className="close-player-button"><IoIosClose size={33}/> </div></Link>


        </div>
        
        
    );
}
export default MusicPlayer;