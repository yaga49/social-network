import React from 'react';
import profile from './Profile.module.css'
import {Post} from "./post/Post";

export function Profile() {
    return (
        <div className={profile.content}>
            <div>
                <img src="https://www.slidebackground.com/uploads/rainbow/color-themes-rainbow-desktop-background-.jpg"/>
            </div>
            <div className={profile.MyPost}>
                <textarea>MyPost</textarea>
                <button>add</button>
            </div>
            <Post messagePost = {"About text"}/>
            <Post messagePost ={"first post"}/>


        </div>
    )
}