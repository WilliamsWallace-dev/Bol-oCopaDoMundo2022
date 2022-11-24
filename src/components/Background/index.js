import {Outlet,Link} from "react-router-dom";

//Imagens
import fundocopa from "../../svg/fundocopa.png";


import circulo1 from "../../svg/circulo1.svg";
import circulo2 from "../../svg/circulo2.svg";
import circulo3 from "../../svg/circulo3.svg";
import circulo4 from "../../svg/circulo4.svg";



import estrela from "../../svg/estrela.svg";
import losango from "../../svg/losango.svg"

import torcedor1 from "../../svg/torcedor1.svg";
import torcedor2 from "../../svg/torcedor2.svg";

import iconeInstagram from "../../svg/iconeInstagram.svg";
import iconeLinkedIn from "../../svg/iconeLinkedIn.svg";
import iconeCompartilhar from "../../svg/iconeCompartilhar.svg";

import campoDeFutebol1 from "../../svg/campoDeFutebol.svg";
import campoDeFutebol2 from "../../svg/campoDeFutebol.svg";
import campoDeFutebol3 from "../../svg/campoDeFutebol.svg";
import bola1 from "../../svg/bola1.svg";


//mobile

import fundocopaM from "../../svg/mobile/fundocopa.png";


// import chute1 from "../../svg/chute1.svg";

const Background = ({type})=>{

    if(window.screen.width < 540){
        if(type == "1"){
            return(
                <>
                    {/* <img className="fundocopa" src={fundocopaM} alt="Imagem com síbolo da copa do mundo de 2022"></img> */}
                    <div className="background-gradient"></div>
                    <img className="circulo1" src={circulo1} alt=""></img>
                    <img className="circulo1-2" src={circulo1} alt=""></img>
                    <img className="circulo3" src={circulo3} alt=""></img>
                    <img className="circulo4" src={circulo4} alt=""></img>
        
                    <img className="circulo2" src={circulo2} alt=""></img>
                    <img className="estrela1" src={estrela} alt=""></img>
                    <img className="estrela2" src={estrela} alt=""></img>

                    <img className="estrela3" src={estrela} alt=""></img>
                    <img className="estrela4" src={estrela} alt=""></img>
                    <img className="losango1" src={losango} alt=""></img>
                    <img className="losango2" src={losango} alt=""></img>
                    
    
                    
        
                    <img className="torcedor1" src={torcedor1} alt=""></img>
                    <img className="torcedor2" src={torcedor2} alt=""></img>
        
                    
                
                </>
            )
        }else if(type == "2"){
            return(
                <>
                    <div className="background-gradient"></div>
    
                    <img className="campoDeFutebol1" src={campoDeFutebol1} alt=""></img>
                    <img className="campoDeFutebol3" src={campoDeFutebol3} alt=""></img>
                    {/* <img className="campoDeFutebol2" src={campoDeFutebol1} alt=""></img> */}
                    
    
                    {/* <img className="bola1" src={bola1} alt=""></img> */}
                    {/* <img className="chute1" src={chute1} alt=""></img> */}
    
                    {/* <img className="bola2" src={bola1} alt=""></img> */}
                    {/* <img className="chute2" src={chute1} alt=""></img> */}
    
                    <img className="estrela3" src={estrela} alt=""></img>
                    <img className="estrela4" src={estrela} alt=""></img>
                    <img className="losango1" src={losango} alt=""></img>
                    <img className="losango2" src={losango} alt=""></img>
    
                    <img className="torcedor1" src={torcedor1} alt=""></img>
                    <img className="torcedor2" src={torcedor2} alt=""></img>
    
                    <img className="circulo1" src={circulo1} alt=""></img>
                    <img className="circulo1-2" src={circulo1} alt=""></img>
                    <img className="circulo3" src={circulo3} alt=""></img>
                    <img className="circulo4" src={circulo4} alt=""></img>
                    <img className="circulo5" src={circulo2} alt=""></img>
    
                    
        
                    {/* <div className="redes flex-collumn">
                    <a href = "https://web.whatsapp.com/" target="_blank" ><img className="" src={iconeCompartilhar} alt=""></img></a>
                        <a href = "https://www.instagram.com/wwallace357/" target="_blank" ><img className="" src={iconeInstagram} alt=""></img></a>
                        <a href = "https://www.linkedin.com/in/williams-wallace-alves-passos-b4123a252/" target="_blank" ><img className="" src={iconeLinkedIn} alt=""></img></a>
                    </div> */}
                
                </>
            )
        }         
    }else{
        if(type == "1"){
            return(
                <>
                    {/* <div className="background-gradient"></div> */}
                    <img className="fundocopa" src={fundocopa} alt="Imagem com síbolo da copa do mundo de 2022"></img>
                    <img className="circulo1" src={circulo1} alt=""></img>
                    <img className="circulo1-2" src={circulo1} alt=""></img>
                    <img className="circulo3" src={circulo1} alt=""></img>
                    <img className="circulo4" src={circulo4} alt=""></img>
        
                    <img className="circulo2" src={circulo2} alt=""></img>
                    <img className="estrela1" src={estrela} alt=""></img>
                    <img className="estrela2" src={estrela} alt=""></img>

                    <img className="estrela3" src={estrela} alt=""></img>
                    <img className="estrela4" src={estrela} alt=""></img>
                    <img className="losango1" src={losango} alt=""></img>
                    <img className="losango2" src={losango} alt=""></img>
                    
    
                    
        
                    <img className="torcedor1" src={torcedor1} alt=""></img>
                    <img className="torcedor2" src={torcedor2} alt=""></img>
        
                    <div className="redes flex-collumn">
                        <a href = "https://web.whatsapp.com/" target="_blank" ><img className="" src={iconeCompartilhar} alt=""></img></a>
                        <a href = "https://www.instagram.com/williamswallace_/" target="_blank" ><img className="" src={iconeInstagram} alt=""></img></a>
                        <a href = "https://www.linkedin.com/in/williams-wallace" target="_blank" ><img className="" src={iconeLinkedIn} alt=""></img></a>
                    </div>
                
                </>
            )
        }else if(type == "2"){
            return(
                <>
                    <div className="background-gradient"></div>
    
                    {/* <img className="campoDeFutebol1" src={campoDeFutebol1} alt=""></img>
                    <img className="campoDeFutebol3" src={campoDeFutebol3} alt=""></img>
                    <img className="campoDeFutebol2" src={campoDeFutebol1} alt=""></img> */}
                    
    
                    {/* <img className="bola1" src={bola1} alt=""></img> */}
                    {/* <img className="chute1" src={chute1} alt=""></img> */}
    
                    {/* <img className="bola2" src={bola1} alt=""></img> */}
                    {/* <img className="chute2" src={chute1} alt=""></img> */}
    
                    <img className="estrela3" src={estrela} alt=""></img>
                    <img className="estrela4" src={estrela} alt=""></img>
                    <img className="losango1" src={losango} alt=""></img>
                    <img className="losango2" src={losango} alt=""></img>
    
                    <img className="torcedor1" src={torcedor1} alt=""></img>
                    <img className="torcedor2" src={torcedor2} alt=""></img>
    
                    <img className="circulo1" src={circulo1} alt=""></img>
                    <img className="circulo1-2" src={circulo1} alt=""></img>
                    <img className="circulo3" src={circulo3} alt=""></img>
                    <img className="circulo4" src={circulo4} alt=""></img>
    
                    
        
                    
                
                </>
            )
        } 
    }
    
    
}

export default Background;