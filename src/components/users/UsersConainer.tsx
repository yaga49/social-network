import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "../dialogs/Dialogs";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UsersTypeFind} from "../../redux/state";


const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersReducer.users,

  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return{
    follow: (userId: string) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId: string) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users: UsersPageType) =>{
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)