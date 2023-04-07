import {ActionsType, dialogPageType, ProfilePageType, StateType, store, UsersPageType, UsersTypeFind} from "./state";

type ProfileReducerType = {
    profile: ProfilePageType
    _onChange: () => void
}

let initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users?.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                }) as UsersTypeFind[]

            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users?.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                }) as UsersTypeFind[]

            }
        }
        case "SET-USERS": {
            console.log('From users reducer ')
            // @ts-ignore
            return {...state, users: [...state.users, ...action.users]}
        }
        default : {
            return state
        }

    }

}
