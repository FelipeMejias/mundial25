import styled from "styled-components"

export default function Escudo({cores}){
    function devolveCor(l){
        switch(l){
            case 'y':return 'yellow'
            case 'r':return 'red'
            case 'g':return 'green'
            case 'b':return 'blue'
            case 'w':return 'white'
            case 'p':return 'black'
            case 'k':return 'pink'
        }
    }
    return(
        <Tudo cor={devolveCor(cores[0])}>
            <CirculoAzul cor={devolveCor(cores[1])}/>
        </Tudo>
    )
}
const Tudo=styled.div`
    width:40px;
    height:40px;
    background-color:${p=>p.cor};
    border-radius:50%;
    padding:10px;
`
const CirculoAzul=styled.div`
    width:40px;
    height:40px;
    background-color:${p=>p.cor};
    border-radius:50%;
`