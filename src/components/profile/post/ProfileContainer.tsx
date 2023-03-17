import React from 'react';

import {Profile} from "../Profile";
import {ContainerType} from "../../dialogs/DialogsContainer";
import {ActionsType, addPostAC, StateType, StoreType, updateNewPostTextCreator} from "../../../redux/state";
import {connect} from "react-redux";
import {Dialogs} from "../../dialogs/Dialogs";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export type MessagesPropsType = {
    // messagePost: Array<MessagesType>
    // // addPost: (PostMessage: string) => void
    // newPostText: string
    // // updateNewPostText: (newText: string) => void
    // dispatch: (action: AddPostActionType | UpdateNewTextActionType) => void
    store : StoreType
}


// export function ProfileContainer(props: ContainerType) {
//
//     const addPost = (text: string) => {
//         // props.addPost(newPostRef.current ? newPostRef.current.value : "----")
//         // props.dispatch({type: "ADD-POST", PostMessage: newPostRef.current ? newPostRef.current.value : "----"})
//         let action = addPostAC(text)
//         props.store.dispatch(action)
//     }
//
//     const onPostChange = (text: string) => {
//         // props.updateNewPostText(newPostRef.current ? newPostRef.current.value : "----")
//         let action = updateNewPostTextCreator(text)
//         props.store.dispatch(action)
//     }
//     return <Profile addPostAC={addPost} updateNewPostTextCreator={onPostChange}
//                     messagePost={props.store._state.profilePage.messages}
//                     newPostText={props.store._state.profilePage.newPostText}
//     />
// }
type MSTPType = {
    messagePost:any[]
    newPostText:string
}


const mapStateToProps = (state: AppStateType):MSTPType => {
  return{
      // messagePost: state.profilePage.messages,
      // newPostText: state.profilePage.newPostText,
      messagePost: state.profileReducer.messages,
      newPostText: state.profileReducer.newPostText,

  }
}


type MDTPType = {
    addPostAC: (text: string) => void
    updateNewPostTextCreator: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch):MDTPType => {
  return{
      addPostAC: (text: string)=>{
          let action = addPostAC(text)
          dispatch(action)
      },
      updateNewPostTextCreator: (text: string)=>{
          let action = updateNewPostTextCreator(text)
          dispatch(action)
      }
  }
}

export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)