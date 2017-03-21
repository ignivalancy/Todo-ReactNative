import { CREATE_TODO, REMOVE_ITEM, TOGGLE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, RELOAD_TODOS, RECEIVE_TODOS } from "../constants/actions";

const initialState = [{
    id: 113464613,
    text: "Introduction",
    complete: false
}, {
    id: 235684679,
    text: "Flux Demo",
    complete: false
}, {
    id: 235684676,
    text: "Redux Demo",
    complete: false
}, {
    id: 235688679,
    text: "Redux Middleware's",
    complete: false
}, {
    id: 235684179,
    text: "React Flux Router",
    complete: false
}, {
    id: 235084169,
    text: "Redux - Thunk, Saga, Promise",
    complete: false
}, {
    id: 235684109,
    text: "Redux Persist",
    complete: false
}]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO:
            return [{
                    id: Date.now(),
                    complete: false,
                    text: action.text
                },
                ...state
            ]

        case REMOVE_ITEM:
            return state.filter(todo =>
                todo.id !== action.id
            )

        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ? {...todo, complete: !todo.complete } :
                todo
            )

        case COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.complete)
            return state.map(todo => ({
                ...todo,
                complete: !areAllMarked
            }))

        case CLEAR_COMPLETED:
            return state.filter(todo => todo.complete === false)

        case RECEIVE_TODOS:
            return initialState

        default:
            return state
    }
}
