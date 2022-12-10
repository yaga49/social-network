import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";

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
        messagePost={state.dialogPage.messages}
        users={state.profilePage.users}
        messagesUsers={state.dialogPage.messagesUsers}/>,
  document.getElementById('root')
);