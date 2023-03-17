import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";

export type AppStateType = ReturnType<typeof rootReducers>

let rootReducers = combineReducers({
    profileReducer,
    dialogReducer
})

export let store = createStore(rootReducers)