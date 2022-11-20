import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";



export function Sidebar() {
    return(
        <nav className={s.sidebar}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>messages</NavLink>
            </div>
            <div className={s.item}>
                <a>music</a>
            </div>
            <div className={s.item}>
                <a>setting</a>
            </div>
            <div className={s.item}>
                <a>profile</a>
            </div>
        </nav>
    )
}