import React from "react";
import p from './Post.module.css'

type PostPropsType ={
    messagePost: string
}

export function Post(props: PostPropsType) {
    return(
        <div className={p.item}>
            <div><img src="http://fitm.asoiu.edu.az/upload/teacher_images/default.png"/></div>

            <div>
                {props.messagePost}
            </div>
            <div>like</div>

        </div>

    )
}