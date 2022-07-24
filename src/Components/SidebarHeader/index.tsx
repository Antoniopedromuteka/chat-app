
import React from 'react'

import * as S from "./styles"

import {MdDonutLarge, MdChat, MdMoreVert} from "react-icons/md"

import * as EmailValidator from "email-validator";
import { auth, db } from '../../services/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollection} from "react-firebase-hooks/firestore"



const SidebarHeader = ({setUserChat}:any) => {

    const [user]:any = useAuthState(auth);
    const refChat: any = db
    .collection("chats")
    .where("users", "array-contains", user?.email);

    const [chatsSnapshot] = useCollection(refChat);

    function handleCreateChat(){
         const emailInput = prompt("Escreva o email desejado");

         if(!emailInput) return;

         if(!EmailValidator.validate(emailInput)){
            return alert("E-mail inválido!")
         }else if(emailInput === user.email){

            return alert("insira um email diferente do seu");
         }else if(chatExists(emailInput)){
            return alert("chat já existe");
         }

         db.collection("chat").add({
            users: [user.email, emailInput],
         });
    }

    function chatExists(emailchat:string){

        return !!chatsSnapshot?.docs.find(
            (chat) =>  chat.data().users.find((user:any)=> user === emailchat)?.length > 0
        )

    }


  return (
    <S.Container>
        <S.Avatar
            src={user?.photoURL}
            onClick={() => [auth.signOut(), setUserChat(null)]}
        />

        <S.Options>
            <MdDonutLarge/>
            <MdChat onClick={handleCreateChat} />
            <MdMoreVert/>
        </S.Options>
    </S.Container>
  )
}

export default SidebarHeader