import React from "react";
import { UsersPageType, UsersTypeFind} from "../../redux/state";
import styles from "./users.module.css"
import axios from "axios";
import { UsersContainerProps} from "./UsersConainer";

export class Users extends React.Component<UsersContainerProps, any>{


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
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for(let i = 1; i<=pagesCount; i++){
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map((p) => {
                        return <span key={p} className={this.props.currentPage === p ? styles.selectedPage: ""}
                        onClick={()=>{this.onPageChanged(p)}}
                        >{p}</span>
                    })}


                </div>
                {
                    this.props.users?.map((u) => {
                        return (
                            <div>
                  <span>
                      <div>
                        <img src={u.photos.small} className={styles.userPhoto}/>
                      </div>
                      <div>
                        {u.followed ? <button onClick={() => this.props.unFollow(u.id)}>unfollowed</button> :
                            <button onClick={() => this.props.follow(u.id)}>followed</button>}
                      </div>

                  </span>
                                <span>
                      <span>
                          <div>{u.name}</div>
                          <div>{u.status}</div>
                      </span>

                  </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
