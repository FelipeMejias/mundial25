import { useEffect, useState } from 'react';
import styled from 'styled-components';
import atm from './imgs/atm.png'
import bay from './imgs/bay.png'
import ben from './imgs/ben.png'
import boc from './imgs/boc.png'
import bor from './imgs/bor.png'
import bot from './imgs/bot.png'
import che from './imgs/che.png'
import fla from './imgs/fla.png'
import flu from './imgs/flu.png'
import int from './imgs/int.png'
import juv from './imgs/juv.png'
import mac from './imgs/mac.png'
import pal from './imgs/pal.png'
import por from './imgs/por.png'
import psg from './imgs/psg.png'
import rem from './imgs/rem.png'
import riv from './imgs/riv.png'
import sal from './imgs/sal.png'
import alh from './imgs/alh.png'
import ali from './imgs/ali.png'
import ala from './imgs/ala.png'
import uls from './imgs/uls.png'
import ura from './imgs/ura.png'
import wyd from './imgs/wyd.png'
import esp from './imgs/esp.png'
import mam from './imgs/mam.png'
import mon from './imgs/mon.png'
import sea from './imgs/sea.png'
import leo from './imgs/leo.png'
import pac from './imgs/pac.png'
import auc from './imgs/auc.png'
import mia from './imgs/mia.png'
const continentes=[
    {
        nome:'Europa',
        imagens:[ atm,bay,ben,bor,che,int,juv,mac,por,psg,rem,sal],
        clubes:[ 'Atlhletico Madrid','Bayern','Benfica','Borussia Dortmund','Chelsea','Internazionalle','Juventus','Manchester City','Porto','PSG','Real Madrid','Salzburg']
    },{
        nome:'América do Sul',
        imagens:[ boc,bot,fla,flu,pal,riv],
        clubes:[ 'Boca Juniors','Botafogo','Flamengo','Fluminense','Palmeiras','River Plate']
    },{
        nome:'América do Norte',
        imagens:[ mon,sea,leo,pac,mia],
        clubes:['Monterrey','Seattle Sounders','León','Pachuca','Inter Miami']
    },{
        nome:'Ásia',
        imagens:[ alh,ura,ali,uls,auc],
        clubes:['Al Hilal','Urawa Red Diamonds','Al Ain','Ulsan','Auckland City']
    },{
        nome:'África',
        imagens:[ ala,wyd,esp,mam],
        clubes:['Al Ahly','Wydad Casablanca','Espérance','Mamelodi Sundowns']
    }
]
export function App(){
  
    return(
        <Container>
            <Menu><h1>Mundial 2025</h1></Menu>
            <Resto>
            {continentes.map(cont=>{
                const {nome,clubes,imagens}=cont
                return( 
                <Continente>
                    <h2>{nome}</h2>
                    <Lista>
                    {clubes.map((club,i)=>{
                        const img=imagens[i]
                        return(
                            <Clube>
                                <img src={img}/>
                                <h3>{club}</h3>
                            </Clube>
                    )})}
                    </Lista>
                </Continente>
            )})}
            </Resto>
            
            
        </Container>
    )
  }
  const Container=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow:auto;
  height:100vh;width:100vw;
  background-color:#3ac613;
  `
  const Continente=styled.div`
     flex-direction:column;
     padding:20px;box-sizing:border-box;
     margin-top:20px;
     width:95%;
  background-color:#257709;
    display:flex;
  border-radius:20px;
  h2{margin:0;
  font-size:20px;
  color:white;
  }
  `
  const Clube=styled.div`background-color:;
  height:100px;min-width:120px;
     display:flex;
  align-items:center;
  justify-content:space-evenly;;
  img{width:60px;height:auto;}
   flex-direction:column;
   h3{
   margin:0;
  font-size:16px;
  color:white;
  font-weight:400;white-space: nowrap;
   }
  `
  const Menu=styled.div`
  height:60px;width:100%;
  background-color:#c9c9c9;
    display:flex;
  align-items:center;
  justify-content:center;
  h1{
  font-size:25px;
  color:green;
  }
  `
  const Resto=styled.div`
    height:calc(100% - 60px);width:100%;
    display:flex;
    flex-direction:column;
  align-items:center;
  overflow:auto;
  padding-bottom:20px;box-sizing:border-box;
  `
  const Botao=styled.div`
  
  `
  const Lista=styled.div`background-color:;
    height:130px;width:100%;
    display:flex;
  align-items:center;
  overflow:auto;



  `