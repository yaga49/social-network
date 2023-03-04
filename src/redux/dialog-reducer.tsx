import {ActionsType, dialogPageType, StateType, store, StoreType} from "./state";

type DialogReducerType = {
    dialog: dialogPageType
    _onChange: () => void
}

export const dialogReducer = (state: dialogPageType, action: ActionsType) => {

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
