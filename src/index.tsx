import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, StateType, subscribe, updateNewPostText} from "./redux/state";
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
            state={state} addPost={addPost} updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)