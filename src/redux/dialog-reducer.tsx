import {ActionsType, dialogPageType, StateType, store, StoreType} from "./state";

type DialogReducerType = {
    dialog: dialogPageType
    _onChange: () => void
}

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
            state.newMessageBody = action.body
            store._onChange()
            return state
        }
        case "SEND-MESSAGE": {
            let body = state.newMessageBody
            state.newMessageBody = " "
            state.messagesUsers.push({id: "4", messages: action.body})
            store._onChange()
            return state
        }
        default : {
            return state
        }
    }


}
