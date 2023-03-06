import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {MessagesPropsType, Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MessagesType} from "./components/profile/post/Post";
import {MessagesUsersType, UserType} from "./index";
import {ActionsType, AddPostActionType, StateType, store, UpdateNewTextActionType} from "./redux/state";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {ProfileContainer} from "./components/profile/post/ProfileContainer";

export type PropsType = {
    // messagePost: Array<MessagesType>
    // users: UserType[]
    // messagesUsers: MessagesUsersType[]
    // addPost: (PostMessage: string)=>void
    state: StateType
    // updateNewPostText: (newText: string)=> void
    dispatch: (action: ActionsType)=>void
}



function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className={"content-wrapper"}>
                    <Route path="/profile" render={() => <ProfileContainer store={store}/>}/>


                    <Route path="/dialogs" render={() =>
                        // <Dialogs
                        //     messagePost={props.state.dialogPage.messagesUsers}
                        //     users={props.state.dialogPage.users}
                        //     messagesUsers={props.state.dialogPage.messagesUsers}
                        //     dispatch={props.dispatch}
                        //     newMessageBody = {props.state.dialogPage.newMessageBody}
                        //     // addPost={props.addPost}
                        // />
                        <DialogsContainer store={store}/>
                        }/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
