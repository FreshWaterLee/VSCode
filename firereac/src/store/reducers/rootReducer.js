import authReducer from './autoReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
})

export default rootReducer