import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {MessagesPropsType, Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MessagesType} from "./components/profile/post/Post";
import {MessagesUsersType, UserType} from "./index";

import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {ProfileContainer} from "./components/profile/post/ProfileContainer";
import {Users} from "./components/users/Users";
import {UsersContainer} from "./components/users/UsersConainer";


function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className={"content-wrapper"}>
                    <Route path="/profile" render={() => <ProfileContainer/>}/>


                    <Route path="/dialogs" render={() =>
                        // <Dialogs
                        //     messagePost={props.state.dialogPage.messagesUsers}
                        //     users={props.state.dialogPage.users}
                        //     messagesUsers={props.state.dialogPage.messagesUsers}
                        //     dispatch={props.dispatch}
                        //     newMessageBody = {props.state.dialogPage.newMessageBody}
                        //     // addPost={props.addPost}
                        // />
                        <DialogsContainer/>
                    }/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
