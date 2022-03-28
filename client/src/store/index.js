<<<<<<< HEAD
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
=======
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Immutable from "seamless-immutable";

import rootReducer from "./ducks";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) =>
  createStore(
    rootReducer,
    Immutable(initialState),
    applyMiddleware(sagaMiddleware)
  );

const store = configureStore({});

sagaMiddleware.run(rootSaga);
>>>>>>> c6f80577ae489ae8e689affb6f264b9151e8eb27

export default store;
