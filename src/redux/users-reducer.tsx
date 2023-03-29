import {ActionsType, dialogPageType, ProfilePageType, StateType, store, UsersPageType, UsersTypeFind} from "./state";

type ProfileReducerType = {
    profile: ProfilePageType
    _onChange: () => void
}

let initialState: UsersPageType = {
    users: [
        {
            id: "1",
            img: "https://img.freepik.com/free-icon/avatar_318-158392.jpg",
            fullName: "Vladimir",
            followed: true,
            status: "I am a status",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: "2",
            img: "https://img.freepik.com/free-icon/avatar_318-158392.jpg",
            fullName: "Vladimir",
            followed: false,
            status: "I am a status",
            location: {city: "Samara", country: "Russia"}
        },
        {
            id: "3",
            img: "https://img.freepik.com/free-icon/avatar_318-158392.jpg",
            fullName: "Vladimir",
            followed: false,
            status: "I am a status",
            location: {city: "Saratov", country: "Russia"}
        },
    ]
}

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            const test = state.users?.map((u) => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
            })
            return {
                ...state,
                users: test as UsersTypeFind[]

            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users?.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                }) as UsersTypeFind[]

            }
        }
        case "SET-USERS":{
            // @ts-ignore
            return {...state, users: [...state.users , ...action.users] }
        }
        default : {
            return state
        }

    }

}
