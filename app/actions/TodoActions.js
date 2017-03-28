import { CREATE_TODO, EDIT_TODO, REMOVE_ITEM, TOGGLE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, RELOAD_TODOS, RECEIVE_TODOS } from "../constants/actions";

export const createTodo = text => ({ type: CREATE_TODO, text })
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })
export const removeTodo = id => ({ type: REMOVE_ITEM, id })
export const toggleTodo = id => ({ type: TOGGLE_TODO, id })
export const completeAll = () => ({ type: COMPLETE_ALL })
export const clearCompleted = () => ({ type: CLEAR_COMPLETED })
export const reloadTodo = () => ({ type: RELOAD_TODOS })
export const receiveTodo = () => ({ type: RECEIVE_TODOS })
