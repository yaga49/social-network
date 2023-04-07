import React from "react";
import { UsersPageType, UsersTypeFind} from "../../redux/state";
import styles from "./users.module.css"
import axios from "axios";
import { UsersContainerProps} from "./UsersConainer";
type UsersType = {
    users: UsersTypeFind[]
    setUsers: (users: UsersTypeFind[]) => void
    follow: (users: UsersTypeFind[]) => void
    unFollow: (users: UsersTypeFind[]) => void
}

export const Users = (props: UsersContainerProps) => {

    if(props.users.length === 0){

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response)
            props.setUsers(response.data.items)
        })

    }

    return (
       <div>
           {
               props.users?.map((u) => {
                   return(
                       <div>
                  <span>
                      <div>
                        <img src={u.photos.small} className={styles.userPhoto}/>
                      </div>
                      <div>
                        {u.followed? <button onClick={()=>props.unFollow(u.id)}>unfollowed</button > : <button onClick={()=>props.follow(u.id)}>followed</button>}
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