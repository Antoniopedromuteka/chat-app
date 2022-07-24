import React, { useEffect } from 'react';
import { Loading } from './Components/Loading';
 

import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, db} from './services/firebase'
import { Login } from './Components/Login';


 

function App() {

  const [user, loading] = useAuthState(auth);


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
    <div>

     APP
      
 
    </div>
  );
}

export default App;
