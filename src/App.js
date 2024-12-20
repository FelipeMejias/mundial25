import styled from "styled-components";
import continentes from "./infos";
import Continente from "./Continente";
import { useState } from "react";
import Escudo from "./Escudo";
import TelaTime from "./Telinha";

export function App(){
    const [time,setTime]=useState(-1)
    
    return(
        <Tela>
            <Menu><h1>Mundial 2025</h1></Menu>
            <TelaTime time={time} setTime={setTime}/>
            <Conteudo>
                {continentes.map( (item,i)=> 
                    <Continente imgs={item.imagens} iCont={i} setTime={setTime} participaram={item.participaram} nome={item.nome} clubes={item.clubes} />
                )}
            </Conteudo>
        </Tela>
    )
}

const Tela=styled.div`
    flex-direction:column;
    align-items:center;
    height:100vh;
    width:100vw;
    background-color:#3ac613;
    overflow:auto;
`
const Menu=styled.div`
    align-items:center;
    justify-content:center;
    height:60px;
    width:100%;
    background-color:#c9c9c9;
    h1{
        font-size:25px;
        color:#1D5B06;
    }
`
const Conteudo=styled.div`
    flex-direction:column;
    align-items:center;
    height:calc(100% - 60px);
    width:100%;
    box-sizing:border-box;
    padding-bottom:20px;
    overflow:auto;
`