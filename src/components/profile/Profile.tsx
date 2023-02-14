import React, {RefObject} from 'react';
import profile from './Profile.module.css'
import {MessagesType, Post} from "./post/Post";
import {updateNewPostText} from "../../redux/state";



export type MessagesPropsType = {
    messagePost: Array<MessagesType>
    addPost: (PostMessage: string)=>void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}





export function Profile(props: MessagesPropsType) {
    const messagesElements = props.messagePost.map(e=><Post messagePost = {e.messages}/>)

    const newPostRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost(newPostRef.current ? newPostRef.current.value : "----")

    }

    const onPostChange = () => {
      props.updateNewPostText(newPostRef.current ? newPostRef.current.value : "----")
    }
    return (
        <div className={profile.content}>
            <div>
                <img src="https://www.slidebackground.com/uploads/rainbow/color-themes-rainbow-desktop-background-.jpg"/>
            </div>
            <div className={profile.MyPost}>
                <textarea ref={newPostRef} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost}>add</button>
            </div>
            {messagesElements}


        </div>
    )
}