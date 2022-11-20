import React from "react";
import s from "./Dialogs.module.css"


export function Dialogs() {
    return(
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <div className={s.dialogsItem + " " + s.active}>
                    user 1
                </div>
                <div className={s.dialogsItem}>
                    user 2
                </div>
                <div className={s.dialogsItem}>
                    user 2
                </div>
            </div>
            <div className={s.messages}>
                <div>
                    about1
                </div>
                <div>
                    about2
                </div>
                <div>
                    about3
                </div>
            </div>

        </div>
    )
}