/**
 * Wraps data and sends and recieves http requests
 */
import axios from 'axios'

//LOOK INTO THIS:
//https://stackoverflow.com/questions/58381551/how-to-avoid-then-hell-in-javascript?noredirect=1&lq=1

const numToLetter = { "01": "A", "02": "B", "03": "C", "04": "D", "05": "E", "06": "F", "07": "G", "08": "H", "09": "I", "10": "J", "11": "K", "12": "L", '13': "M", "14": "N", "15": "O", "16": "P", "17": "Q", "18": "R", "19": "S", "20": "T", "21": "U", "22": "V", '23': "W", "24": "X", "25": "Y", "26":"Z" }

export const WrapHostDataInJson = (roomCode, playlistName, userName, hostKey, roomPswd) => {
    return {
        roomcode: roomCode,
        roomname: playlistName,
        roompswd: roomPswd,
        hostname: userName,
        hostcode:  hostKey  
    }
}

export const WrapUserDataInJson = (userName, roomCode, roomPassword) => {
    return {
        username: userName,
        roomcode: roomCode,
        password: roomPassword
    }
}

export const GenerateRoomCode = () => {
    var base = String(Math.floor(Math.random() * 90000000) + 10000000)
    console.log(base)
    var res = ""
    var temp = ""
    for (var i = 0; i < base.length; i += 2) {
        temp = base[i] + base[i+1]
        if (parseInt(temp) > 26){
            var sum = parseInt(base[i]) + parseInt(base[i+1])
            temp = String(parseInt(base[i]) + parseInt(base[i+1]))
            if (sum < 10) {
                temp = "0" + String(sum)
            }
        }
        if (temp === "00"){
            temp = "01"
        }
        res += numToLetter[temp]
    }
    console.log(res)
    return res
}

export const JoinRoom = async (roomCode) => {
    var success = false

    try {
        var res = await axios.post("http://localhost:9000/join", {
            test:roomCode
        })
        if (res.status === 200) {
            console.log(res)
            success = true
        } else {
            console.log("failed, but here's res anyways")
            console.log(res)
        }
    } catch (error) {
        console.log(error)
    }

    return success
}

export const HostRoom = async (roomdata) => {
    var success = false

    try {
        var res = await axios.post("http://localhost:9000/host", roomdata)
        if (res.status === 200) {
            console.log(res)
            success = true
        } else {
            console.log("failed, but here's res anyways")
            console.log(res)
        }
    } catch (error) {
        console.log(error)
    }

    return success
}
