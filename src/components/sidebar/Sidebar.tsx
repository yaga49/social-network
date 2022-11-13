import React from 'react';
import s from './Sidebar.module.css'


export function Sidebar() {
    return(
        <nav className={s.sidebar}>
            <div className={`${s.item} ${s.active}`}>
                <a>profile</a>
            </div>
            <div>
                <a>setting</a>
            </div>
            <div>
                <a>music</a>
            </div>
            <div>
                <a>profile</a>
            </div>
            <div>
                <a>profile</a>
            </div>
        </nav>
    )
}