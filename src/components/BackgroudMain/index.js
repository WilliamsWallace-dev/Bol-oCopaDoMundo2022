//Imagens
import fundocopa from "../../svg/fundocopa.png";
import circulo1 from "../../svg/circulo1.svg";
import circulo2 from "../../svg/circulo2.svg";
import circulo3 from "../../svg/circulo3.svg";
import circulo4 from "../../svg/circulo4.svg";

import estrela from "../../svg/estrela.svg";

const BackgroudMain = ()=>{
    return(
        <>
        <img className="backgroundMain" src={fundocopa} alt="Imagem com síbolo da copa do mundo de 2022"></img>
        <img className="circulo1" src={circulo1} alt=""></img>
        <img className="circulo1-2" src={circulo1} alt=""></img>
        <img className="circulo3" src={circulo3} alt=""></img>
        <img className="circulo4" src={circulo4} alt=""></img>

        <img className="circulo2" src={circulo2} alt=""></img>
        <img className="estrela1" src={estrela} alt=""></img>
        <img className="estrela2" src={estrela} alt=""></img>
        </>
    )
}

export default BackgroudMain;