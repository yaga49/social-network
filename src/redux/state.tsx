import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";

export type UsersType = {
    id: string
    name: string
}


export type dialogPageType = {
    users: UsersType[]
    messagesUsers: MessageType[]
    newMessageBody: string
}

export type MessageType = {
    id: string
    messages: string
}

export type ProfilePageType = {
    messages: MessageType[]
    newPostText: string
}

export type UsersTypeFind = {
    id: string
    photos: {
        small: string,
        large: string
    }
    name: string
    followed: boolean,
    status: string,

}
export type UsersPageType = {
    users: UsersTypeFind[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: dialogPageType


}

export type StoreType = {
    _state: StateType
    _onChange: ()=>void
    getState: ()=>void
    // addPost: (PostMessage: string)=>void
    // updateNewPostText: (newText: string)=>void
    subscribe: (observer: () => void)=>void
    dispatch: (action: ActionsType)=>void
}

export type ActionsType = AddPostActionType | UpdateNewTextActionType | UpdateNewMessageBody | sendMessageCreatorType|
    FollowACType| UnFollowACType | SetUsersACType


export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyCreator>
export type UpdateNewTextActionType = ReturnType<typeof updateNewPostTextCreator>
export type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>


export const store: StoreType = {
    _state: {
        profilePage: {
            messages: [
                {id: "1", messages: "About text"},
                {id: "2", messages: "first post"}
            ],
            newPostText: "bla-bla.com",
        },
        dialogPage: {

            users: [
                {id: "1", name: "user_1"},
                {id: "2", name: "user_2"},
                {id: "3", name: "user_3"}
            ],
            messagesUsers: [
                {id: "1", messages: "about_1"},
                {id: "2", messages: "about_1"},
                {id: "3", messages: "about_1"}
            ],
            newMessageBody : ""
        },

    },
    _onChange ()  {

    },
    getState(){
        return this._state
    },
    // addPost(PostMessage) {
    //     const newPost = {
    //         id: "3",
    //         messages: PostMessage
    //     }
    //     this._state.profilePage.messages.push(newPost)
    //     this._state.profilePage.newPostText = ""
    //     this._onChange()
    // },
    // updateNewPostText (newText){
    //     this._state.profilePage.newPostText = newText
    //     this._onChange()
    // },
    subscribe (observer){
        this._onChange = observer
    },
    dispatch(action){
        profileReducer(this._state.profilePage, action)
        dialogReducer(this._state.dialogPage, action)
    }
}


export const updateNewPostTextCreator = (text: string)  => {
  return {
      type: "UPDATE-NEW-POST-TEXT",
      newText: text
  } as const
}

export const addPostAC = (text: string)  => {
    return {
        type: "ADD-POST",
        PostMessage: text
    } as const
}
export const sendMessageCreator = (text: string)  => {
    return {
        type: "SEND-MESSAGE",
        body: text
    } as const
}
export const updateNewMessageBodyCreator = (text: string)  => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: text
    } as const
}

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unFollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}

export const setUsersAC = (users: UsersPageType) => {
    return {
        type: "SET-USERS",
        users
    } as const
}