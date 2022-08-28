import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {userReducer} from "./user/userReducer";
import thunk from "redux-thunk";


const rootReducerCreator = () => {
  return combineReducers({
    user: userReducer
  });
}

let storeCreator

if(window && window?.__REDUX_DEVTOOLS_EXTENSION__) {
  storeCreator =  createStore(
    rootReducerCreator(),
    compose(
      applyMiddleware(
        thunk
      ),
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true, traceLimit: 20})
    )
  );
}
else {
  storeCreator = createStore(
    rootReducerCreator(),
    compose(
      applyMiddleware(
        thunk
      )
    )
  );
}

export const store = storeCreator;