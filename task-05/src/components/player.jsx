import "./player.css"
import { FaRegHeart, FaRotateLeft } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { TiArrowShuffle } from "react-icons/ti";
import { MdAddCircleOutline } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";


function Player(){
    return(
        
        <div className="player-container" >
            <div className="player-song-details" >
                <Link to='/musicplayer' style={{ textDecoration: 'none',color:"black"}}><div className="player-songdetails-musicplayer">
                    <div className="player-song-cover"></div>
                    <div className="player-song-info">
                        <p className="player-song-name">Song Name</p>
                        <p className="player-artist-name">Artist Name</p>
                    </div></div></Link>
                <div className="player-like-button">
                    <FaRegHeart size={20}/>
                </div>
            </div>
            <div className="player-playback-controls">
                <div className="player-back-button">
                    <FaBackwardStep size={20}/>
                </div>
                <div className="player-pause-button">
                    <FaPause size={20}/>
                </div>
                
                <div className="player-next-button">
                    <FaForwardStep size={20}/>
                </div>
            </div>
            <progress className="player-progress-bar" max={100} value={70} color="#3e026b" >

            </progress>
            <div className="player-option-buttons">
                <div className="player-shuffle-button">
                    <TiArrowShuffle size={25}/>
                </div>
                <div className="player-add-button">
                    <MdAddCircleOutline size={25}/>
                </div>
                <div className="player-share-button">
                    <IoShareSocial size={25}/>
                </div>
                <div className="player-other-button">
                    <BsThreeDotsVertical size={25}/>
                </div>

            </div>
        </div>
    );
}

export default Player;