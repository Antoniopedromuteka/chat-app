

import React from "react";


import { auth, provider } from "../../services/firebase";

import * as S from './styles';





export function Login(){

    function HandleSignin(){
        auth.signInWithPopup(provider).catch(alert);
    }

    return(

        <S.Container>

            <S.Button onClick={HandleSignin}>
                Login com o Google
            </S.Button>

        </S.Container>
        

    );
}