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
            let stateCopy = {...state}
            stateCopy.messages = [ newPost, ...state.messages]
            stateCopy.newPostText = ""
            store._onChange()
            return stateCopy
        }
        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            store._onChange()
            return stateCopy
        }
        default : {
            return state
        }

    }

}
