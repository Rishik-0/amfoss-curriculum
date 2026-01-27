import "./player.css"
import { FaRegHeart, FaRotateLeft } from "react-icons/fa6";
import { FaPause,FaPlay } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { TiArrowShuffle } from "react-icons/ti";
import { MdAddCircleOutline } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";


function Player({playlists,userid, song,isPlaying,onToggle}){
    
    const[currentTime,setCurrentTime] = useState(0)
    const [showPlaylists, setShowPlaylists] = useState(false);

    const toggleMenu = () => setShowPlaylists(!showPlaylists);

    const handleAdd = async(playlistId) =>{
        if (!song || !playlistId ){
            return;
        }
        else{
            await fetch("http://127.0.0.1:5000/api/playlistsongs",{
                method : "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    playlist_id: playlistId,
                    song_url: song.song_url || song.previewUrl,
                    song_icon: song.song_icon || song.artworkUrl100,
                    song_name: song.song_name || song.trackName,
                    song_artist: song.song_artist || song.artistName,
                    user_id: userid
                } )
            });
            alert("Added!");
        }
    }

    

    if (!song){
        return <div></div>
    }
    return(
        
        <div className="player-container" >
            <div className="player-song-details" >
                <Link to='/musicplayer' style={{ textDecoration: 'none',color:"black"}}><div className="player-songdetails-musicplayer">
                    <img className="player-song-cover" src={(song.artworkUrl100 || song.song_icon).replace('100x100bb', '600x600bb')} ></img>
                    <div className="player-song-info">
                        <p className="player-song-name">{song.trackName || song.song_name}</p>
                        <p className="player-artist-name">{song.artistName || song.song_artist}</p>
                    </div></div></Link>
                <div className="player-like-button">
                    <FaRegHeart size={20}/>
                </div>
            </div>
            <div className="player-playback-controls">
                <div className="player-back-button">
                    <FaBackwardStep size={20}/>
                </div>
                <div className="player-pause-button" onClick={onToggle} style={{ cursor: 'pointer'}}>
                    {isPlaying ? <FaPause size={20}/> : <FaPlay size={20}/>}
                </div>
                
                <div className="player-next-button">
                    <FaForwardStep size={20}/>
                </div>
            </div>
            <progress className="player-progress-bar" max={30} value={20} color="#3e026b" >

            </progress>
            <div className="player-option-buttons">
                <div className="player-shuffle-button">
                    <TiArrowShuffle size={25}/>
                </div>
                <div className="player-add-button">
                    <MdAddCircleOutline size={25} onClick={toggleMenu} style={{ cursor: 'pointer', color: showPlaylists ? '#3e026b' : 'inherit' }}/>
                    {showPlaylists && (<select className="addPlaylistDropdown"
                    onChange={(e) => {
                        handleAdd(e.target.value);
                        setShowPlaylists(false)
                    }} 
                    defaultValue = "">
                        <option value="" disabled>Add to</option>
                        {playlists.map((playlist) => (
                            <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
                        ))}
                    </select>)}
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