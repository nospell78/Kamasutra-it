import * as serviceWorker from './serviceWorker';
import store from './Redux/State';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root'),
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
