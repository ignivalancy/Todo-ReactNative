import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { RELOAD_TODOS, RECEIVE_TODOS } from "../constants";

class AppStore extends EventEmitter {

    constructor() {

        super();

        this.isLoading = false;
    }

    startLoading() {

        this.isLoading = true;

        this.emit("change");
    }

    stopLoading() {

        this.isLoading = false;

        this.emit("change");
    }

    getAppStatus() {
        return this.isLoading;
    }

    handleActions(action) {        
        switch (action.type) {
            case RELOAD_TODOS:
                {
                    this.startLoading();
                    break;
                }
            case RECEIVE_TODOS:
                {
                    this.stopLoading();
                    break;
                }
        }
    }

}

const appStore = new AppStore;

dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;
