import React, {FormEvent} from "react";

import {
    ActionsType,
    sendMessageCreator,
    updateNewMessageBodyCreator,

} from "../../redux/state";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


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