import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from "./redux/state";
import './index.css';
import {MessagesType} from "./components/profile/post/Post";


export type UserType = {
    id:string
    name:string
}
export type MessagesUsersType ={
    id: string
    messages: string
}



const rerenderEntireTree = () => {


    ReactDOM.render(
        <App
            state={store._state} dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)