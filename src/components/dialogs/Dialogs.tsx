import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {PropsType} from "../../App";

export type DialogsItemType = {
    id: string
    name: string
}
type MessageCompType = {
    messages: string
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

export function Dialogs(props: PropsType) {
    const messagesElements = props.messagesUsers.map(e=> <DialogsItem id={e.id} name={e.messages}/>)

    const usersElements = props.users.map(e=> <DialogsItem id={e.id} name={e.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>

                {usersElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}