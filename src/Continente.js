import styled from "styled-components"
import Clube from "./Clube"

export default function Continente({nome,clubes,participaram}){
    return(
        <Tudo>
            <Topo>
                <h2>{nome}</h2>
                <h2><small>já participaram:</small> {participaram}</h2>
            </Topo>
            <ListaClubes>
            {clubes.map( clube=>
                <Clube nome={clube} />
            )}
            </ListaClubes>
        </Tudo>
    )
}
const Tudo=styled.div`
    flex-direction:column;
    width:95%;
    background-color:#257709;
    border-radius:20px;
    box-sizing:border-box;
    padding:20px;
    margin-top:20px;
    h2{
        margin:0;
        font-size:20px;
        color:white;
        small{
            font-size:16px;
            font-weight:300;
        }
    }
`
const ListaClubes=styled.div`
    align-items:center;
    height:170px;
    width:100%;
    overflow:auto;
    padding:0
`
const Topo=styled.div`
    align-items:center;
    width:100%;
    padding:0;
    justify-content:space-between;
`