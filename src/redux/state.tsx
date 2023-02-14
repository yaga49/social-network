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




export const store = {
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
    addPost(PostMessage: string) {
        const newPost = {
            id: "3",
            messages: PostMessage
        }
        this._state.profilePage.messages.push(newPost)
        this._state.profilePage.newPostText = ""
        this._onChange()
    },
    updateNewPostText (newText: string){
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    subscribe (observer: () => void){
        this._onChange = observer
    }
}



