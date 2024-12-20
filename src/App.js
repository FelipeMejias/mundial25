import styled from "styled-components";
import continentes from "./infos";
import Continente from "./Continente";
import { useState } from "react";
import Escudo from "./Escudo";

export function App(){
    const [time,setTime]=useState(-1)
    function telaTime(){
        if(time<0){
            return <></>
        }else{
            return <Telinha>
                <Sair onClick={()=>setTime(-1)}>Fechar</Sair>
                <Escudo/>
            </Telinha>
        }
    }
    return(
        <Tela>
            <Menu><h1>Mundial 2025</h1></Menu>
            <Conteudo>
                {telaTime()}
                {continentes.map( (item,i)=> 
                    <Continente cores={item.cores} iCont={i} setTime={setTime} participaram={item.participaram} nome={item.nome} clubes={item.clubes} />
                )}
            </Conteudo>
        </Tela>
    )
}
const Telinha=styled.div`
position:fixed;top:25%;
max-width:400px;border-radius:25px;
    flex-direction:column;
    align-items:center;
    height:50%;
    width:70%;
    background-color:white;
`
const Sair=styled.div`
position:absolute;top:10px;right:10px;
width:80px;border-radius:25px;
    flex-direction:column;
    align-items:center;
    height:30px;
    background-color:#db4646;
    color:white;justify-content:center;
    cursor:pointer;
`
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