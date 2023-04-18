import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "../dialogs/Dialogs";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  unFollowAC,
  UsersPageType,
  UsersTypeFind
} from "../../redux/state";


export type UsersContainerProps = ReturnType<typeof mapStateToProps>&ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage
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
    },
    setCurrentPage: (currentPage: number) =>{
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalCount: (totalCount: number) =>{
      dispatch(setTotalCountAC(totalCount))
    }
  }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)