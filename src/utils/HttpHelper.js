/**
 * Wraps data and sends and recieves http requests
 */
import Axios from 'axios'

//LOOK INTO THIS:
//https://stackoverflow.com/questions/58381551/how-to-avoid-then-hell-in-javascript?noredirect=1&lq=1

export const WrapHostDataInJson = (playlistName, userName, hostKey, roomPswd) => {
    return {
        title: playlistName,
        host: userName,
        key:  hostKey,
        password: roomPswd
    }
}

export const WrapUserDataInJson = (userName, roomCode, roomPassword) => {
    return {
        username: userName,
        roomcode: roomCode,
        password: roomPassword
    }
}

export const JoinRoom = (roomCode) => {

}

export const HostRoom = () => {

}

export const GenerateRoomCode = () => {

}
