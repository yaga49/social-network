import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {MessagesPropsType, Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MessagesType} from "./components/profile/post/Post";
import {MessagesUsersType, UserType} from "./index";

export type PropsType = {
    messagePost: Array<MessagesType>
    users: UserType[]
    messagesUsers: MessagesUsersType[]
}

function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className={"content-wrapper"}>
                    <Route path="/profile" render={() => <Profile
                        messagePost={props.messagePost}/>}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            messagePost={props.messagePost}
                            users={props.users}
                            messagesUsers={props.messagesUsers}
                        />}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
