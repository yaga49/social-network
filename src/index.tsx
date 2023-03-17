import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './index.css';
import {MessagesType} from "./components/profile/post/Post";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";


export type UserType = {
    id: string
    name: string
}
export type MessagesUsersType = {
    id: string
    messages: string
}


const rerenderEntireTree = () => {


    ReactDOM.render(
        <Provider store={store}>
            <App/>,
        </Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)