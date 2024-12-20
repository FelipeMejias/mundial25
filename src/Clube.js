import styled from "styled-components"
import Escudo from "./Escudo"

export default function Clube({nome}){
    return(
        <Tudo>
            <Escudo/>
            <h3>{nome}</h3>
        </Tudo>
    )
}
const Tudo=styled.div`
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background-color:#31930d;
    height:130px;
    min-width:120px;
    border-radius:10px;
    box-sizing:border-box;
    margin-right:10px;
    cursor:pointer;
    h3{
        margin:0;
        font-size:16px;
        height:30px;
        color:white;
        font-weight:400;
        text-align: center;
    }
`