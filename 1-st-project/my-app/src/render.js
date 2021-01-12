import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import './index.css';

export let rerenderEntireTree = (state, addNewPost) => {

    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addNewPost={addNewPost} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}