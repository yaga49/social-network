import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "../dialogs/Dialogs";




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
import axios from "axios";
import styles from "./users.module.css";
import {Users} from "./Users";


export type UsersContainerProps = ReturnType<typeof mapStateToProps>&ReturnType<typeof mapDispatchToProps>


export class UsersContainers extends React.Component<UsersContainerProps, any>{


  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      console.log(response)
      this.props.setUsers(response.data.items)
      this.props.setTotalCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber: number)=>{
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      console.log(response)
      this.props.setUsers(response.data.items)

    })
  }

  render() {

    return <Users users={this.props.users}
                  currentPage={this.props.currentPage}
                  follow={this.props.follow}
                  unFollow={this.props.unFollow}
                  onPageChanged={this.onPageChanged}
                  pageSize={this.props.pageSize}
                  totalUsersCount={this.props.totalUsersCount}
    />
  }
}


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

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersContainers)