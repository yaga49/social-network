import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from "./redux/state";

export type UserType = {
    id:string
    name:string
}
export type MessagesUsersType ={
    id: string
    messages: string
}




ReactDOM.render(

    <App
        messagePost={state.profilePage.messages}
        users={state.dialogPage.users}
        messagesUsers={state.dialogPage.messagesUsers}
        addPost={addPost}
    />,
  document.getElementById('root')
);