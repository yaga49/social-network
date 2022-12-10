import React from 'react';
import profile from './Profile.module.css'
import {MessagesType, Post} from "./post/Post";



export type MessagesPropsType = {
    messagePost: Array<MessagesType>
}





export function Profile(props: MessagesPropsType) {
    const messagesElements = props.messagePost.map(e=><Post messagePost = {e.messages}/>)

    return (
        <div className={profile.content}>
            <div>
                <img src="https://www.slidebackground.com/uploads/rainbow/color-themes-rainbow-desktop-background-.jpg"/>
            </div>
            <div className={profile.MyPost}>
                <textarea>MyPost</textarea>
                <button>add</button>
            </div>
            {messagesElements}


        </div>
    )
}