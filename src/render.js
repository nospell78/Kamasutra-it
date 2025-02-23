import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  addMessage,
  addPost,
  updateNewMessagePost,
  updateNewTextPost,
} from './Redux/State';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      addMessage={addMessage}
      updateNewTextPost={updateNewTextPost}
      updateNewMessagePost={updateNewMessagePost}
    />,
    document.getElementById('root'),
  );
};
