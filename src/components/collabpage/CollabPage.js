import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit';
import { addSong } from '../../features/songlist/songlistSlice'
import { Spin, Button, Input, Tooltip, Form } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import 'antd/es/spin/style/css';
import { SongList } from './SongList'



const getSongs = state => state.songlist.songList
const selectorSongs = createSelector(
    [getSongs],
    (songs) => {
        return songs
    }
)


const CollabPage = ({ songListProp, addSong }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [songTitle, setSongTitle] = useState("")
    const [songArtist, setSongArtist] = useState("")
    const [playlistTitle, setPlaylistTitle] = useState("")

    const onChange = (e, input) => {
        switch (input) {
            case "title":
                setSongTitle(e.target.value)
                break;
            case "artist":
                setSongArtist(e.target.value)
                break;
            default:
                break;
        }
    }
    
    const onFormSubmit = e => {
        e.preventDefault()
        let username = "bart"
        addSong({songId: Math.random(), songTitle, songArtist, username})
        setSongTitle("")
        setSongArtist("")
    }

    return(
        <div>
            {isLoading ? 
                <Spin tip="Connecting to room..."></Spin> 
                : 
                <div>
                    <div>
                        <form>
                            <h3>{playlistTitle}</h3>
                            <Input size="large" placeholder="Song Title" value={songTitle} onChange={e => onChange(e, "title")}></Input>
                            <Input size="large" placeholder="Song Artist" value={songArtist} onChange={e => onChange(e, "artist")}></Input>
                            <Button type="primary" htmltype="submit" onClick={onFormSubmit}>Add Song</Button>
                        </form>
                        <div>
                            <h2>show spotify query results here</h2>
                        </div>
                    </div>
                    <SongList currentList={songListProp} currentSearchTitle={songTitle} currentArtist={songArtist}></SongList>
                </div>}
        </div>
    );
}


const mapState = state => ({
    songListProp: selectorSongs(state)
})
const mapDispatch = { addSong }


export default connect (
    mapState,
    mapDispatch
)(CollabPage)