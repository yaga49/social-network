import {ActionsType, dialogPageType, ProfilePageType, StateType, store} from "./state";

type ProfileReducerType = {
    profile: ProfilePageType
    _onChange: () => void
}

let initialState = {
    messages: [
        {id: "1", messages: "About text"},
        {id: "2", messages: "first post"}
    ], newPostText: "bla-bla.com",
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: "3",
                messages: action.PostMessage
            }
            state.messages.push(newPost)
            state.newPostText = ""
            store._onChange()
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.newText
            store._onChange()
            return state
        }
        default : {
            return state
        }

    }

}
