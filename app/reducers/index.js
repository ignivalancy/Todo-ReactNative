import { combineReducers } from 'redux'
import app from './app'
import nav from './nav'
import todos from './todos'

const rootReducer = combineReducers({
    app,
    nav,
    todos
})

export default rootReducer
