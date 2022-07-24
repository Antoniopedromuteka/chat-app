

import styled from "styled-components";



export const Container = styled.div`

    height: 59px;
    background-color: #f0f2f5;
    padding: 10px 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 5px;

    box-shadow: 0 1px 2px #0003;

`;

export const Avatar = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 50%;
`


export const Options = styled.div`

    display: flex;
    gap: 10px;


    svg{
        width: 24px;
        height: 24px;
        color: #54656f;
        cursor: pointer;
    }


`

