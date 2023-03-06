import React from 'react';

import {Profile} from "../Profile";
import {ContainerType} from "../../dialogs/DialogsContainer";
import {addPostAC, StoreType, updateNewPostTextCreator} from "../../../redux/state";


export type MessagesPropsType = {
    // messagePost: Array<MessagesType>
    // // addPost: (PostMessage: string) => void
    // newPostText: string
    // // updateNewPostText: (newText: string) => void
    // dispatch: (action: AddPostActionType | UpdateNewTextActionType) => void
    store : StoreType
}


export function ProfileContainer(props: ContainerType) {

    const addPost = (text: string) => {
        // props.addPost(newPostRef.current ? newPostRef.current.value : "----")
        // props.dispatch({type: "ADD-POST", PostMessage: newPostRef.current ? newPostRef.current.value : "----"})
        let action = addPostAC(text)
        props.store.dispatch(action)
    }

    const onPostChange = (text: string) => {
        // props.updateNewPostText(newPostRef.current ? newPostRef.current.value : "----")
        let action = updateNewPostTextCreator(text)
        props.store.dispatch(action)
    }
    return <Profile addPostAC={addPost} updateNewPostTextCreator={onPostChange}
                    messagePost={props.store._state.profilePage.messages}
                    newPostText={props.store._state.profilePage.newPostText}
    />
}