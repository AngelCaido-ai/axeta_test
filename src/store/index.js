import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {userReducer} from "./user/userReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
  key: "axeta",
  storage
}


const rootReducer = combineReducers({
  user: userReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer)


let storeCreator

if (window && window?.__REDUX_DEVTOOLS_EXTENSION__) {
  storeCreator = createStore(
    persistedReducer,
    compose(
      applyMiddleware(
        thunk
      ),
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true, traceLimit: 20})
    )
  );
} else {
  storeCreator = createStore(
    persistedReducer,
    compose(
      applyMiddleware(
        thunk
      )
    )
  );
}

export const store = storeCreator;

export const persistor = persistStore(store)
