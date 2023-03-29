import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";

export type AppStateType = ReturnType<typeof rootReducers>

let rootReducers = combineReducers({
    profileReducer,
    dialogReducer,
    usersReducer,
})

export let store = createStore(rootReducers)