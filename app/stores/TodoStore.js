import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { CREATE_TODO, REMOVE_ITEM, TOGGLE_TODO, RECEIVE_TODOS, MARK_COMPLETE } from "../constants";

class TodoStore extends EventEmitter {

    constructor() {

        super();

        this.todos = [{
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
        }];
    }

    createTodo(text) {

        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false,
        });

        this.emit("change");
    }

    getAll() {
        return this.todos;
    }

    toggleTodo(tid) {

        this.todos = this.todos.map(({ id, text, complete }) =>
            tid === id ? { id, text, complete: !complete } : { id, text, complete }
        )

        this.emit("change");
    }

    removeTodo(tid) {

        this.todos = this.todos.filter(({ id, text, complete }) => tid !== id)

        this.emit("change");
    }

    markAllCompleted() {

        this.todos = this.todos.map(({ id, text, complete }) => ({ id, text, complete: true }));

        this.emit("change");
    }

    handleActions(action) {
        switch (action.type) {
            case CREATE_TODO:
                {
                    this.createTodo(action.text);
                    break;
                }
            case REMOVE_ITEM:
                {
                    this.removeTodo(action.id);
                    break;
                }
            case TOGGLE_TODO:
                {
                    this.toggleTodo(action.id);
                    break;
                }
            case RECEIVE_TODOS:
                {
                    this.todos = action.todos;
                    this.emit("change");
                    break;
                }
            case MARK_COMPLETE:
                {
                    this.markAllCompleted();
                    break;
                }
        }
    }

}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
