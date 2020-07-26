import { createSlice } from '@reduxjs/toolkit'

const songlistSlice = createSlice({
    name: "songlist",
    initialState: [],
    reducers: {
        addSong: {
            reducer(state, action) {
                const { songName, artist, addedBy } = action.payload
                state.push({ songName, artist, addedBy })
            }
        }
    }
})

export const { addSong } = songlistSlice.actions
export default songlistSlice.reducer