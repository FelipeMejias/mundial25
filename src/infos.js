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
        participaram:26,
        imagens:[ atm,bay,ben,bor,che,int,juv,mac,por,psg,rem,sal],
        clubes:[ 'Atlhletico Madrid','Bayern','Benfica','Borussia Dortmund','Chelsea','Internazionalle','Juventus','Manchester City','Porto','PSG','Real Madrid','Salzburg'],
        cores:['rw','rb','rw','yp','bw','bp','pw','bw','bw','br','ww','wr'],
        paises: ['Espanha', 'Alemanha', 'Portugal', 'Alemanha', 'Inglaterra', 'Itália', 'Itália', 'Inglaterra', 'Portugal', 'França', 'Espanha', 'Áustria']
    },{
        nome:'América do Sul',
        participaram:14,
        imagens:[ boc,bot,fla,flu,pal,riv],
        clubes:[ 'Boca Juniors','Botafogo','Flamengo','Fluminense','Palmeiras','River Plate'],
        cores:['by','wp','rp','rg','gw','wr',],
        paises: ['Argentina', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Argentina']
    },{
        nome:'América do Norte',
        participaram:14,
        imagens:[ mon,sea,leo,pac,mia],
        clubes:['Monterrey','Seattle Sounders','León','Pachuca','Inter Miami'],
        cores:['bw','wb','gw','bw','kp',],
        paises: ['México', 'Estados Unidos', 'México', 'México', 'Estados Unidos']
    },{
        nome:'Ásia',
        participaram:25,
        imagens:[ alh,ura,ali,uls,auc],
        clubes:['Al Hilal','Urawa Red Diamonds','Al Ain','Ulsan','Auckland City'],
        cores:['bw','rp','rw','wr','yb','bw',],
        paises: ['Arábia Saudita', 'Japão', 'Emirados Árabes Unidos', 'Coreia do Sul', 'Nova Zelândia']
    },{
        nome:'África',
        participaram:14,
        clubes:['Al Ahly','Wydad Casablanca','Espérance','Mamelodi Sundowns'],
        cores:['rw','wg','ry','gw'],
        paises: ['Egito', 'Marrocos', 'Tunísia', 'África do Sul'],
        imagens:[ ala,wyd,esp,mam],
    }
]
export default continentes