import {getDefaultMiddleware} from '@reduxjs/toolkit' 

const testMiddleware = () => { 
    return function(next) {
        return function(action) {
            console.log("this is a test")
            return next(action)
        }
    }
}

const middleware = [getDefaultMiddleware, testMiddleware]

export default middleware