import React from 'react'
import MacWindows from './MacWindows'
import "./spotify.scss"

const spotify = () => {
  return (
    <MacWindows width="25vw">
        <div className="spotify-window">
            {/* embed feature */}
            <iframe  src="https://open.spotify.com/embed/playlist/1DbryVZDc2zUwDrjgoQjtE?utm_source=generator" 
            width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindows>
  )
}

export default spotify
