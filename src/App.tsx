import React, { useEffect, useState } from 'react';
import { Loading } from './Components/Loading';
 

import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, db} from './services/firebase'
import { Login } from './Components/Login';
import Sidebar from './Components/Sidebar';

import * as S from "../src/styles/app"

 

function App() {

  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);


  useEffect(()=>{
    if(user){
      db.collection("user").doc(user.uid).set(
        {
          email: user.email,
          photoURL: user.photoURL,
        });
      }
  }, [user]);

  if(loading) return <Loading/>;

  if(!user) return <Login/>

  return (
    <S.Container>
    <Sidebar setUserChat={setUserChat} userChat={userChat}/>
    </S.Container>
  );
}

export default App;
