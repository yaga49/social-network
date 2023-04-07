import React from "react";
import { UsersPageType, UsersTypeFind} from "../../redux/state";
import styles from "./users.module.css"
import axios from "axios";
import { UsersContainerProps} from "./UsersConainer";

export class Users extends React.Component<UsersContainerProps, any>{

    constructor(props: any) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>

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
