import { combineReducers } from 'redux'
import songlistReducer from '../features/songlist/songlistSlice'
import validloginReducer from '../features/validlogin/validloginSlice'

export default combineReducers({
    songlist: songlistReducer,
    validlogin: validloginReducer
})