

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


export let onChange = () =>{

}

export const state: StateType = {
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
};

export const addPost = (PostMessage: string) => {
    const newPost = {
        id: "3",
        messages: PostMessage
    }
    state.profilePage.messages.push(newPost)
    state.profilePage.newPostText = ""
    onChange()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    onChange()
}

export const subscribe = (observer: ()=>void) => {
    onChange = observer
}