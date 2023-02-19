import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {PropsType} from "../../App";
import {MessagesType} from "../profile/post/Post";
import {MessagesUsersType, UserType} from "../../index";
import {AddPostActionType, UpdateNewTextActionType} from "../../redux/state";

export type DialogsItemType = {
    id: string
    name: string
}
type MessageCompType = {
    messages: string
}
type DialogPropsType={
    messagePost: Array<MessagesType>
    users: UserType[]
    messagesUsers: MessagesUsersType[]
    // addPost: (PostMessage: string)=>void
    dispatch: (action: AddPostActionType | UpdateNewTextActionType)=>void
}



const DialogsItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialogsItem + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageComp = (props: MessageCompType) => {
    return (
        <div>
            {props.messages}
        </div>
    )
}

export function Dialogs(props: DialogPropsType) {
    const messagesElements = props.messagesUsers.map(e=> <DialogsItem id={e.id} name={e.messages}/>)

    const usersElements = props.users.map(e=> <DialogsItem id={e.id} name={e.name}/>)

    let textMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
      let text = textMessage.current?.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>

                {usersElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={textMessage}></textarea>
            <button onClick={addMessage}>add</button>
        </div>
    )
}