import {ActionsType, dialogPageType} from "./state";



let initialState = {
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
}

export const dialogReducer = (state: dialogPageType = initialState, action: ActionsType) => {



    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            let stateCopy = {
                ...state,
                newMessageBody: action.body
            }

            return stateCopy
        }
        case "SEND-MESSAGE": {
            let body = state.newMessageBody
            let stateCopy = {
                ...state,
                newMessageBody: "",
                messagesUsers: [...state.messagesUsers, {id: "4", messages: action.body}]
            }

            return stateCopy
        }
        default : {
            return state
        }
    }


}
