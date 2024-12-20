import styled from "styled-components"
import Escudo from "./Escudo"
import continentes from "./infos"
export default function TelaTime({time,setTime}){
    if(time<0){
        return <></>
    }else{
        const cont=Math.floor(time/100)
        const clube=time%100
        return <Telinha>
            <Sair onClick={()=>setTime(-1)}>Fechar</Sair>
                
                <span>
                    <Escudo cores={continentes[cont].cores[clube]}/>
                    <h4>{continentes[cont].clubes[clube]}</h4>
                </span>
                <h4><small>{continentes[cont].paises[clube]}</small></h4>
        </Telinha>
    }
}
const Telinha=styled.div`
position:fixed;top:25%;
max-width:400px;border-radius:25px;
justify-content:space-evenly;
    flex-direction:column;
    align-items:center;
    height:50%;
    width:70%;
    background-color:#d6d6d6;
    h4{
        font-size:22px;
        font-weight:500;
        margin:0;
        small{
            font-size:28px;
            font-weight:300;
        }
    }
    span{height:100px;background-color:;
    align-items:center;display:flex;flex-direction:column;
    justify-content:space-between;
    }
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