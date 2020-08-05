/**
 * Wraps data and sends and recieves http requests
 */
import axios from 'axios'

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

export const JoinRoom = async (roomCode) => {
    try {
        var res = await axios.post("http://localhost:9000/createroom", {
            test:roomCode
        })
        if (res.status === 200) {
            console.log(res)
        } else {
            console.log("failed, but here's res anyways")
            console.log(res)
        }
    } catch (error) {
        console.log(error)
    }
}

export const HostRoom = () => {

}

export const GenerateRoomCode = () => {

}
