import { createSlice } from '@reduxjs/toolkit'

const songlistSlice = createSlice({
    name: "songlist",
    initialState: {
        songList: []
    },
    reducers: {
        addSong: (state, action) => {
            state.songList.push(action.payload)
        },
        removeSong: (state, action) => {
            //why can I use .push to add but not .filter to remove???
            let temp = []
            state.songList.forEach(song => {
                if (song.songId !== action.payload.songId) {
                    temp.push(song)
                }
            })
            state.songList = temp
        }
    }
})

export const { addSong, removeSong } = songlistSlice.actions
export default songlistSlice.reducer