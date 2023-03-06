import React, {RefObject} from 'react';
import profile from './Profile.module.css'
import {MessagesType, Post} from "./post/Post";
import {addPostAC, AddPostActionType, updateNewPostTextCreator, UpdateNewTextActionType} from "../../redux/state";

//
// export type MessagesPropsType = {
//     messagePost: Array<MessagesType>
//     // addPost: (PostMessage: string) => void
//     newPostText: string
//     // updateNewPostText: (newText: string) => void
//     dispatch: (action: AddPostActionType | UpdateNewTextActionType) => void
// }
export type MessagesPropsType = {
    messagePost: Array<MessagesType>
    // addPost: (PostMessage: string) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    addPostAC: (text: string)=>void
    updateNewPostTextCreator: (text: string)=>void
}


export function Profile(props: MessagesPropsType) {
    const messagesElements = props.messagePost.map(e => <Post messagePost={e.messages}/>)

    const newPostRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostRef.current ? newPostRef.current.value : "----"
        let action = props.addPostAC(text)

    }

    const onPostChange = () => {
        // props.updateNewPostText(newPostRef.current ? newPostRef.current.value : "----")
        let text = newPostRef.current ? newPostRef.current.value : "----"
        let action = props.updateNewPostTextCreator(text)

    }
    return (
        <div className={profile.content}>
            <div>
                <img
                    src="https://www.slidebackground.com/uploads/rainbow/color-themes-rainbow-desktop-background-.jpg"/>
            </div>
            <div className={profile.MyPost}>
                <textarea ref={newPostRef} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost}>add</button>
            </div>
            {messagesElements}


        </div>
    )
}