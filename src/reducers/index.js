import { combineReducers } from 'redux'
import songlistReducer from '../features/songlist/songlistSlice'

export default combineReducers({
    songlist: songlistReducer,
    //searchFilter: searchFilterReducer
})