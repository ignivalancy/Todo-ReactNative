import { combineReducers } from 'redux'
import app from './app'
import nav from './nav'
import todos from './todos'
import user from './user'

const rootReducer = combineReducers({
    app,
    nav,
    todos,
    user
})

export default rootReducer
