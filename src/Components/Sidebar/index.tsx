

import * as S from "./styles";
import React from 'react'
import SidebarHeader from "../SidebarHeader";
import SiderbarChats from "../SidebarChats";




const Sidebar = ({setUserChat, userChat}:any) => {
  return (
    <S.Container>
        <SidebarHeader setUserChat={setUserChat}/>
        <SiderbarChats setUserChat={setUserChat} userChat={userChat}/>
    </S.Container>
    
  )
}

export default Sidebar