import React, { useState } from 'react'
import { Spin, Button, Input, Tooltip, Form } from 'antd'
import 'antd/es/spin/style/css';
import PageHeader from './Header'
import { SearchOutlined } from '@ant-design/icons';
import { addSong } from '../features/songlist/songlistSlice'
import { connect } from 'react-redux'

const mapDispatch = { addSong }

const CollabPage = ({ addSong }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [songSearchText, setSongSearchText] = useState("")
    const [songArtistText, setSongArtistText] = useState("")

    const onChange = (e, input) => {
        switch (input) {
            case "title":
                setSongSearchText(e.target.value)
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
        addSong(songSearchText)
        setSongSearchText("form submitted!")
        setSongArtistText("")
    }

    return(
        <div>
            <PageHeader></PageHeader>
            {isLoading ? 
                <Spin tip="Loading..."></Spin> 
                : 
                <div>
                    <form>
                        <h3>Playlist title will go here</h3>
                        <Input size="large" placeholder="Song Title" value={songSearchText} onChange={e => onChange(e, "title")}></Input>
                        <Input size="large" placeholder="Song Artist" value={songArtistText} onChange={e => onChange(e, "artist")}></Input>
                        <Tooltip title="Search">
                            <Button type="primary" htmltype="submit" shape="circle" icon={<SearchOutlined/>} onClick={onFormSubmit}></Button>
                        </Tooltip>
                    </form>
                </div>}
            <Button type="default" onClick={() => setIsLoading(!isLoading)}>{isLoading ? "stop " : "start "} loading</Button>
        </div>
    );
}

export default connect (
    null,
    mapDispatch
)(CollabPage)