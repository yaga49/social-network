import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {MessagesPropsType, Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MessagesType} from "./components/profile/post/Post";
import {MessagesUsersType, UserType} from "./index";
import {AddPostActionType, StateType, store, UpdateNewTextActionType} from "./redux/state";

export type PropsType = {
    // messagePost: Array<MessagesType>
    // users: UserType[]
    // messagesUsers: MessagesUsersType[]
    // addPost: (PostMessage: string)=>void
    state: StateType
    // updateNewPostText: (newText: string)=> void
    dispatch: (action: AddPostActionType | UpdateNewTextActionType)=>void
}



function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className={"content-wrapper"}>
                    <Route path="/profile" render={() => <Profile
                        messagePost={props.state.profilePage.messages}
                        newPostText = {props.state.profilePage.newPostText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            messagePost={props.state.dialogPage.messagesUsers}
                            users={props.state.dialogPage.users}
                            messagesUsers={props.state.dialogPage.messagesUsers}
                            dispatch={props.dispatch}
                            // addPost={props.addPost}
                        />}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
