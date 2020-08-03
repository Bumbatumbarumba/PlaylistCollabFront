import React, { useState } from 'react'
import SongItem from './SongItem'

export const SongList = (props) => {
    return (
        <div>
            {props.currentList.length > 0 
                ? props.currentList.map(song => (
                    <SongItem key={song.songId} song={song} currentTitle={props.currentSearchTitle} currentArtist={props.currentArtist}/>
                    )) 
                : (<li key={Math.random()}>No songs to show!</li>)}
        </div>
    )
}