import React, { useState } from 'react'
import { Spin, Button, Input, Tooltip, Form } from 'antd'
import 'antd/es/spin/style/css';
import PageHeader from './Header'
import { SearchOutlined } from '@ant-design/icons';
import { addSong } from '../features/songlist/songlistSlice'
import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit';


const getSongs = state => state.songlist.songList
const selectorSongs = createSelector(
    [getSongs],
    (songs) => {
        return songs
    }
)


const CollabPage = ({ songListProp, addSong }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [songTitle, setSongTitle] = useState("")
    const [songArtistText, setSongArtistText] = useState("")

    const onChange = (e, input) => {
        switch (input) {
            case "title":
                setSongTitle(e.target.value)
                break;
            case "artist":
                setSongArtistText(e.target.value)
                break;
            default:
                break;
        }
    }
    
    const onFormSubmit = e => {
        e.preventDefault()
        let username = "bart"
        addSong({songTitle, songArtistText, username})
        setSongTitle("")
        setSongArtistText("")
    }

    return(
        <div>
            <PageHeader></PageHeader>
            {isLoading ? 
                <Spin tip="Connecting to room..."></Spin> 
                : 
                <div>
                    <form>
                        <h3>Playlist title will go here</h3>
                        <Input size="large" placeholder="Song Title" value={songTitle} onChange={e => onChange(e, "title")}></Input>
                        <Input size="large" placeholder="Song Artist" value={songArtistText} onChange={e => onChange(e, "artist")}></Input>
                        <Tooltip title="Search">
                            <Button type="primary" htmltype="submit" shape="circle" icon={<SearchOutlined/>} onClick={onFormSubmit}></Button>
                        </Tooltip>
                    </form>
                    <ul>
                        {Object.values(songListProp).map(song => (
                            <li>{song.songTitle} by {song.songArtistText} - added by {song.username}</li>
                        ))}
                    </ul>
                </div>}
            <Button type="default" onClick={() => setIsLoading(!isLoading)}>{isLoading ? "stop " : "start "} loading</Button>
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