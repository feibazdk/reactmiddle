import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer'

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);
// creareStore -- 帮我们创建 store
const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga)

export default store;                   