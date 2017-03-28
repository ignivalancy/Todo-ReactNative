import { compose, applyMiddleware, createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage, Platform } from 'react-native'
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './reducers'

const logger = (store) => (next) => (action) => {
  console.log("Action Logged", action);
  return next(action);
};

export default function configureStore() {

    const store = createStore(
        reducer,
        compose(
            autoRehydrate(),
            devToolsEnhancer({
                name: Platform.OS,
                hostname: 'localhost',
                port: 5678
            }),
            applyMiddleware(logger)
        )
    )

    store.subscribe(() => {
        console.log("store changed", store.getState());
    })

    console.log("store obj", store);

    // store.dispatch({ })
    // store.dispatch({ type: "RECEIVE_TODOS" })

    persistStore(store, { storage: AsyncStorage })

    return store
}
