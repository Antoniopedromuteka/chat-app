

import React from "react";

import * as S from './styles'
 


import { Circles } from  'react-loader-spinner'


export function Loading(){
    return(
        
        <S.Container>

        <Circles height={100} width={100} color="#00BFFF"  ariaLabel="Loading" />

        </S.Container>
    
    );
}