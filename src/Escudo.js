import styled from "styled-components"

export default function Escudo(){
    return(
        <Tudo>
            <CirculoAzul/>
        </Tudo>
    )
}
const Tudo=styled.div`
    width:40px;
    height:40px;
    background-color:#EC1349;
    border-radius:50%;
    padding:10px;
`
const CirculoAzul=styled.div`
    width:40px;
    height:40px;
    background-color:#306BBD;
    border-radius:50%;
`