//Imagens
import fundocopa from "../../svg/fundocopa.png";
import circulo1 from "../../svg/circulo1.svg";
import circulo2 from "../../svg/circulo2.svg";
import circulo3 from "../../svg/circulo3.svg";
import circulo4 from "../../svg/circulo4.svg";

import estrela from "../../svg/estrela.svg";

import torcedor1 from "../../svg/torcedor1.svg";
import torcedor2 from "../../svg/torcedor2.svg";

import iconeInstagram from "../../svg/iconeInstagram.svg";
import iconeLinkedIn from "../../svg/iconeLinkedIn.svg";
import iconeCompartilhar from "../../svg/iconeCompartilhar.svg";

import campoDeFutebol1 from "../../svg/campoDeFutebol.svg";
import campoDeFutebol2 from "../../svg/campoDeFutebol.svg";
import bola1 from "../../svg/bola1.svg";
import chute1 from "../../svg/chute1.svg";

const Background = ({type})=>{
    if(type == 1){
        return(
            <>
                {/* <div className="background-gradient"></div> */}
                <img className="fundocopa" src={fundocopa} alt="Imagem com síbolo da copa do mundo de 2022"></img>
                <img className="circulo1" src={circulo1} alt=""></img>
                <img className="circulo1-2" src={circulo1} alt=""></img>
                <img className="circulo3" src={circulo3} alt=""></img>
                <img className="circulo4" src={circulo4} alt=""></img>
    
                <img className="circulo2" src={circulo2} alt=""></img>
                <img className="estrela1" src={estrela} alt=""></img>
                <img className="estrela2" src={estrela} alt=""></img>
    
                <img className="torcedor1" src={torcedor1} alt=""></img>
                <img className="torcedor2" src={torcedor2} alt=""></img>
    
                <div className="redes flex-collumn">
                    <img className="" src={iconeCompartilhar} alt=""></img>
                    <img className="" src={iconeInstagram} alt=""></img>
                    <img className="" src={iconeLinkedIn} alt=""></img>
                </div>
            
            </>
        )
    }else if(type == 2){
        return(
            <>
                {/* <div className="background-gradient"></div> */}
                <img className="campoDeFutebol1" src={campoDeFutebol1} alt=""></img>
                <img className="campoDeFutebol2" src={campoDeFutebol2} alt=""></img>
                

                <img className="bola1" src={bola1} alt=""></img>
                <img className="chute1" src={chute1} alt=""></img>

                <img className="bola2" src={bola1} alt=""></img>
                <img className="chute2" src={chute1} alt=""></img>

                
    
                <div className="redes flex-collumn">
                    <img className="" src={iconeCompartilhar} alt=""></img>
                    <img className="" src={iconeInstagram} alt=""></img>
                    <img className="" src={iconeLinkedIn} alt=""></img>
                </div>
            
            </>
        )
    }
    
}

export default Background;