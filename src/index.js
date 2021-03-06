import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import albumReducer from './store/reducers/album';
import videoReducer from './store/reducers/video';
const composeEnhancers = process.env.NODE_ENV === "development"? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null || compose;
const rootReducer = combineReducers({
    album:albumReducer,
    video:videoReducer
});

const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
