import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

type SidebarType ={
    url: string
    name: string
}

const SidebarItem = (props: SidebarType) => {

  return(
      <div className={s.item}>
          <NavLink to={props.url} activeClassName={s.active}>{props.name}</NavLink>
      </div>
  )
}

export function Sidebar() {
    return(
        <nav className={s.sidebar}>
            <SidebarItem url={"/profile"} name={"profile"}/>
            <SidebarItem url={"/dialogs"} name={"messages"}/>
            <SidebarItem url={"/music"} name={"music"}/>
            <SidebarItem url={"/setting"} name={"setting"}/>
            <SidebarItem url={"/news"} name={"news"}/>

        </nav>
    )
}