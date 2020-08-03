import React from 'react'
import { connect } from 'react-redux'
import { removeSong } from '../../features/songlist/songlistSlice'
import { Button } from 'antd'


const SongItem = (props) => {
    const shouldDisplaySong = () => {
        return (props.song.songTitle.toLowerCase().includes(props.currentTitle) 
                        && props.song.songArtist.toLowerCase().includes(props.currentArtist))
    }
    
    return (
        <div>
            {shouldDisplaySong()
                ? (<li key={props.song.songId}>
                    {props.song.songTitle} by {props.song.songArtist}
                    <Button danger type="primary" shape="circle" onClick={() => props.removeSong({ songId: props.song.songId })}>X</Button>
                    </li>) 
                : (<li style={{ display: 'none' }} key={props.song.songId}></li>)}
        </div>
    )
}


const mapDispatch = { removeSong }


export default connect (
    null,
    mapDispatch
)(SongItem)