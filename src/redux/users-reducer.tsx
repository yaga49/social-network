import {ActionsType, dialogPageType, ProfilePageType, StateType, store, UsersPageType, UsersTypeFind} from "./state";

type ProfileReducerType = {
    profile: ProfilePageType
    _onChange: () => void
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true
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
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING":{
            return {...state, isFetching: action.isFetching}
        }
        default : {
            return state
        }

    }

}
