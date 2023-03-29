import React from "react";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UsersTypeFind} from "../../redux/state";
import styles from "./users.module.css"
type UsersType = {
    users: UsersTypeFind[]
}

export const Users = (props: UsersPageType) => {

    return (
       <div>
           {
               props.users?.map((u) => {
                   return(
                       <div>
                  <span>
                      <div>
                        <img src={u.img} className={styles.userPhoto}/>
                      </div>
                      <div>
                        {u.followed? <button onClick={()=>followAC(u.id)}>unfollowed</button > : <button onClick={()=>unFollowAC(u.id)}>followed</button>}
                      </div>

                  </span>
                           <span>
                      <span>
                          <div>{u.fullName}</div>
                          <div>{u.status}</div>
                      </span>
                      <span>
                          <div>{u.location.city}</div>
                          <div>{u.location.country}</div>
                      </span>
                  </span>
                       </div>
                   )
               })
           }
       </div>
    )
}