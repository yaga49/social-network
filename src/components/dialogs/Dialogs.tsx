import React, {FormEvent} from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


import {MessagesUsersType, UserType} from "../../index";
import {

    updateNewMessageBodyCreator,

} from "../../redux/state";

export type DialogsItemType = {
    id: string
    name: string
}



type DialogPropsType = {
    sendMessageCreator: (text: string)=>void
    updateNewMessageBodyCreator: (text: string)=>void
    messagesUsers: MessagesUsersType[]
    users: UserType[]
    newMessageBody: string
}

const DialogsItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialogsItem + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export function Dialogs(props: DialogPropsType) {
    const messagesElements = props.messagesUsers.map(e => <DialogsItem id={e.id} name={e.messages}/>)

    const usersElements = props.users.map(e => <DialogsItem id={e.id} name={e.name}/>)

    const newMessageBody = props.newMessageBody

    let textMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        let text = textMessage.current ? textMessage.current.value : "----"
        let action = props.sendMessageCreator(text)


    }
    const onNewMessageChange = (e: FormEvent<HTMLButtonElement>) => {
        let text = textMessage.current ? textMessage.current.value : "----"

        let action = updateNewMessageBodyCreator(text)
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
            <div>
                <button onClick={addMessage}
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                >add</button>
            </div>

        </div>
    )
}