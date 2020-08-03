import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { CloseCircleFilled } from '@ant-design/icons';
import { removeSong } from '../../features/songlist/songlistSlice'


const SongItem = (props) => {

    const shouldDisplaySong = () => {
        return (props.song.songTitle.toLowerCase().includes(props.currentTitle) 
                        && props.song.songArtist.toLowerCase().includes(props.currentArtist))
    }

    const test = (item) => {
        console.log(item)
        removeSong(item)
    }

    return (
        <div>
            {shouldDisplaySong()
                ? (<li key={props.song.songId}>
                    {props.song.songTitle} by {props.song.songArtist}
                    </li>) 
                : (<li style={{ display: 'none' }} key={props.song.songId}></li>)}
            <Button danger type="primary" shape="circle" onClick={() => test({ songId: props.song.songId })}>X</Button>
        </div>
    )
}


const mapDispatch = { removeSong }


export default connect (
    null,
    mapDispatch
)(SongItem)