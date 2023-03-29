import React, {FormEvent} from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

import {MessagesType} from "../profile/post/Post";
import {MessagesUsersType, UserType} from "../../index";
import {
    ActionsType,
    AddPostActionType,
    sendMessageCreator, StateType, StoreType,
    updateNewMessageBodyCreator,
    UpdateNewTextActionType
} from "../../redux/state";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export type DialogsItemType = {
    id: string
    name: string
}
type MessageCompType = {
    messages: string
}
// type DialogPropsType = {
//     messagePost: Array<MessagesType>
//     users: UserType[]
//     messagesUsers: MessagesUsersType[]
//     // addPost: (PostMessage: string)=>void
//     dispatch: (action: ActionsType) => void
//     newMessageBody: string
// }
export type ContainerType = {
    store: StoreType
}

const DialogsItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialogsItem + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


// export function DialogsContainer(props: ContainerType) {
//
//
//     let textMessage = React.createRef<HTMLTextAreaElement>()
//
//     const addMessage = (text: string) => {
//
//         let action = sendMessageCreator(text)
//         props.store.dispatch(action)
//
//     }
//     const onNewMessageChange = (text: string) => {
//         let action = updateNewMessageBodyCreator(text)
//         props.store.dispatch(action)
//
//     }
//
//
//     return <Dialogs sendMessageCreator = {addMessage} updateNewMessageBodyCreator={onNewMessageChange}
//                     messagesUsers={props.store._state.dialogPage.messagesUsers}
//                     users={props.store._state.dialogPage.users}
//                     newMessageBody={props.store._state.dialogPage.newMessageBody}
//     />
// }

const mapStateToProps = (state: AppStateType) => {
  return {
      messagesUsers: state.dialogReducer.messagesUsers,
      users: state.dialogReducer.users,
      newMessageBody: state.dialogReducer.newMessageBody
  }
}

const mapDispatchToProps = (dispatch: (action: ActionsType)=>void ) => {
  return{
      updateNewMessageBodyCreator: (text: string)=>{
          let action = updateNewMessageBodyCreator(text)
          dispatch(action)
      },
      sendMessageCreator: (text: string)=>{
          let action = sendMessageCreator(text)
          dispatch(action)
      }
  }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)