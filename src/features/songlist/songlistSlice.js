import { createSlice } from '@reduxjs/toolkit'

const songlistSlice = createSlice({
    name: "songlist",
    initialState: {
        songList: []
    },
    reducers: {
        addSong: (state, action) => {
            state.songList.push(action.payload)
            console.log(state)
            //todo: check if song exists in list before pushing it? make another function for it?
        },
        removeSong(state, action) {
            //todo
        }
    }
})

export const { addSong, removeSong } = songlistSlice.actions
export default songlistSlice.reducer