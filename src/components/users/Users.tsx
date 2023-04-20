import React from "react";
import styles from "./users.module.css";
import {UsersType, UsersTypeFind} from "../../redux/state";
import {NavLink} from "react-router-dom";

type UserTypes = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number)=>void
    users: UsersTypeFind[]
    unFollow: (userId: string)=> void
    follow: (userId: string)=>void
}

export const Users = (props: UserTypes) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for(let i = 1; i<=pagesCount; i++){
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p) => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })}


        </div>
        {
            props.users?.map((u) => {
                return (
                    <div>
                  <span>
                      <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small} className={styles.userPhoto}/>
                      </NavLink>
                      <div>
                        {u.followed ? <button onClick={() => props.unFollow(u.id)}>unfollowed</button> :
                            <button onClick={() => props.follow(u.id)}>followed</button>}
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
}