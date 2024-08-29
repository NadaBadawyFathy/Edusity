import React, { useRef, useState } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

function VideoPlayer({showVideo,setShowVideo}) {
    const player = useRef(null);

    const closePlayer = (e)=>{
        if (e.target === player.current) {
            setShowVideo('')
        }
    }
  return (
    <div className={`video-player ${showVideo}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
