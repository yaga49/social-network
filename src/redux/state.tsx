export type UsersType = {
    id: string
    name: string
}


export type dialogPageType = {
    users: UsersType[]
    messagesUsers: MessageType[]
}

export type MessageType = {
    id: string
    messages: string
}

export type ProfilePageType = {
    messages: MessageType[]
    newPostText: string
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
    dispatch: (action: AddPostActionType | UpdateNewTextActionType)=>void
}

export type AddPostActionType = {
    type: "ADD-POST"
    PostMessage: string
}
export type UpdateNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

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
            ]
        }
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
        if(action.type === "ADD-POST"){
            const newPost = {
                id: "3",
                messages: action.PostMessage
            }
            this._state.profilePage.messages.push(newPost)
            this._state.profilePage.newPostText = ""
            this._onChange()
        } else if(action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
    }
}



