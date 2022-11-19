import { useContext, useEffect } from "react";
import { CopaContext } from "../../Context";

import api from "../../services/api";

//Bandeiras
import Holanda from "../../svg/bandeiras/Holanda.svg"
import Canada from "../../svg/bandeiras/Canada.svg"
import CostaRica from "../../svg/bandeiras/CostaRica.svg"
import Senegal from "../../svg/bandeiras/Sengal.svg"
import EstadosUnidos from "../../svg/bandeiras/EstadosUnidos.svg"
import Mexico from "../../svg/bandeiras/Mexico.svg"
import Dinamarca from "../../svg/bandeiras/Dinamarca.svg"
import Uruguai from "../../svg/bandeiras/Uruguai.svg"
import Suica from "../../svg/bandeiras/Suica.svg"
import Marrocos from "../../svg/bandeiras/Marrocos.svg"                        
import Alemanha from "../../svg/bandeiras/Alemanha.svg"
import Gales from "../../svg/bandeiras/Gales.svg"
import Polonia from "../../svg/bandeiras/Polonia.svg"
import Tunisia from "../../svg/bandeiras/Tunisia.svg"
import CoreiaDoSul from "../../svg/bandeiras/CoreiaDoSul.svg"
import Camaroes from "../../svg/bandeiras/Camaroes.svg"
import Croacia from "../../svg/bandeiras/Croacia.svg"
import Japao from "../../svg/bandeiras/Japao.svg"
import Catar from "../../svg/bandeiras/Catar.svg"
import Inglaterra from "../../svg/bandeiras/Inglaterra.svg"
import Argentina from "../../svg/bandeiras/Argentina.svg"
import Franca from "../../svg/bandeiras/Franca.svg"
import Portugal from "../../svg/bandeiras/Portugal.svg"
import Brasil from "../../svg/bandeiras/Brasil.svg"
import Belgica from "../../svg/bandeiras/Belgica.svg"
import Espanha from "../../svg/bandeiras/Espanha.svg"
import Equador from "../../svg/bandeiras/Equador.svg"
import Ira from "../../svg/bandeiras/Ira.svg"
import ArabiaSaudita from "../../svg/bandeiras/ArabiaSaudita.svg"
import Australia from "../../svg/bandeiras/Australia.svg"
import Gana from "../../svg/bandeiras/Gana.svg"
import Servia from "../../svg/bandeiras/Servia.svg"
                        




const Guess = ()=>{

    const {users,userOn,setUserOn,boloes,setBoloes} = useContext(CopaContext);

    //Funções
    const SalvarPalpites = (e)=>{
        let aux = {...userOn};
        document.querySelectorAll(".partidas input").forEach((e,index)=>{
            if(index == 0){
                if(e.value == ""){
                    aux.palpites = e.placeholder;
                }else{
                    aux.palpites = [e.value]
                }
                
            }else{
                if(e.value == ""){
                    aux.palpites = [...aux.palpites,e.placeholder]
                }else{
                    aux.palpites = [...aux.palpites,e.value]
                }
                
            }
            
        });
        setUserOn(aux);

        api.patch(`/users/${userOn.id}`,{
            palpites : [...aux.palpites]
          })
          .then((response)=>{console.log(response)})
          .catch((error)=>{console.log(error)})

        let mensagem = document.querySelectorAll(".partidas .mensagem");
            mensagem.forEach((msg)=>{
                msg.style.paddingTop = ".5rem";
                msg.classList.toggle("mensagem-green");
                msg.classList.add("p4");
                msg.innerHTML = "Palpites Salvos";
            })

        setTimeout(()=>{
            mensagem.forEach((msg)=>{
                msg.innerHTML = "";
                msg.classList.toggle("mensagem-green");
            })
            
        },3000)
    }



    return (
        <>
            <section className=" guess flex-collumn">
                
                

                <h2>Realize os palpite dos jogos!</h2>
                <p className="subtitle p4 ">O palpite poderá ser alterado até 1 hora antes do jogo.</p>

                {/* <form>
                    
                    <select name="campeão" id="campeão">
                        <label></label>
                        <option value="Brasil">Brasil</option>
                        <option value="Holanda">Holanda</option>
                        <option value="Canadá">Canadá</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Sengal">Sengal</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="México">México</option>
                        <option value="Dinamarca">Dinamarca</option>
                        <option value="Uruguai">Uruguai</option>
                        <option value="Suíça">Suíça</option>
                        <option value="Marrocos">Marrocos</option>
                        <option value="Alemanha">Alemanha</option>
                        <option value="Gales">Gales</option>
                        <option value="Polônia">Polônia</option>
                        <option value="Tunísia">Tunísia</option>
                        <option value="Coréia Do Sul">Coréia Do Sul</option>
                        <option value="Croácia">Croácia</option>
                        <option value="Japão">Japão</option>
                        <option value="Catar">Catar</option>
                        <option value="Inglaterra">Inglaterra</option>
                        <option value="Argentina">Argentina</option>
                        <option value="França">França</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Bélgica">Bélgica</option>
                        <option value="Espanha">Espanha</option>
                        <option value="Equador">Equador</option>
                        <option value="Irã">Irã</option>
                        <option value="Arábia Saudita">Arábia Saudita</option>
                        <option value="Austrália">Austrália</option>
                        <option value="Gana">Gana</option>
                        <option value="Sérvia">Sérvia</option>
                    </select>
                    <label className="p4" style = {{color:"#FCF6F8"}}>Campeão da Copa do Mundo de 2022</label>
                </form> */}
                
                <h3>Fase de Grupos</h3>
                
                <section className="partidas flex-collumn faseDeGrupos">

                {/* ---------------------------------------------------------------------------------------- */}    
                <p className="mensagem mt-0"></p>
                <button type = "button" className="primary-button" onClick={SalvarPalpites} >Salvar Palpites</button>
                
        {/* ---------------------------------------------------------------------------------------- */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Catar}></img>
                                            <p className="p3 ml-1">Catar</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[0]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Equador}></img>
                                            <p className="p3 ml-1">Equador</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[1]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">20/11</p>
                                <p className="p4">13:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Inglaterra}></img>
                                            <p className="p3 ml-1">Inglaterra</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[2]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Ira}></img>
                                            <p className="p3 ml-1">Irâ</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[3]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">21/11</p>
                                <p className="p4">10:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
</div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

<div className="card-background"></div>

<div className="jogo flex-between">
    <div className="times flex-collumn ">
        <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                <div className="flex">
                    <img src = {Senegal}></img>
                    <p className="p3 ml-1">Senegal</p>
                </div>
{/* ---------------------------------------------------------------------------------------- */}
                <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[4]} ></input>
        </div>
        <div className="flex-between">
            {/* ---------------------------------------------------------------------------------------- */}
                <div className="flex">
                    <img src = {Holanda}></img>
                    <p className="p3 ml-1">Holanda</p>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
                <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[5]} ></input>
        </div>
    </div>
    {/* ---------------------------------------------------------------------------------------- */}
    <div className="informações flex-collumn">
        <p className="p4">21/11</p>
        <p className="p4">13:00</p>
    </div>  
    {/* ---------------------------------------------------------------------------------------- */}         
</div>

<div className="jogo flex-between">
    <div className="times flex-collumn ">
        <div className="flex-between">
                {/* -------------------------------------------------------- */}
                <div className="flex">
                    <img src = {EstadosUnidos}></img>
                    <p className="p3 ml-1">Estados Unidos</p>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
                <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[6]} ></input>
        </div>
        <div className="flex-between">
            {/* ---------------------------------------------------------------------------------------- */}
                <div className="flex">
                    <img src = {Gales}></img>
                    <p className="p3 ml-1">Gales</p>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
                <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[7]} ></input>
        </div>
    </div>
    {/* ---------------------------------------------------------------------------------------- */}
    <div className="informações flex-collumn">
        <p className="p4">21/11</p>
        <p className="p4">16:00</p>
    </div>           
    {/* ---------------------------------------------------------------------------------------- */}
</div>  
</div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Argentina}></img>
                                            <p className="p3 ml-1">Argentina</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[8]}></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {ArabiaSaudita}></img>
                                            <p className="p3 ml-1">EquArábia Saudita</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[9]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">22/11</p>
                                <p className="p4">07:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Dinamarca}></img>
                                            <p className="p3 ml-1">Dinamarca</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[10]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Tunisia}></img>
                                            <p className="p3 ml-1">Tunísia</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[11]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">22/11</p>
                                <p className="p4">10:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Mexico}></img>
                                            <p className="p3 ml-1">México</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[12]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Polonia}></img>
                                            <p className="p3 ml-1">Polônia</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[13]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">22/11</p>
                                <p className="p4">13:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Franca}></img>
                                            <p className="p3 ml-1">França</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[14]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Australia}></img>
                                            <p className="p3 ml-1">Austrália</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[15]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">22/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* ---------------------------------------------------------------------------------------- */}    
<p className="mensagem"></p>
                <button type = "button" className="primary-button" onClick={SalvarPalpites} >Salvar Palpites</button>
{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Marrocos}></img>
                                            <p className="p3 ml-1">Marrocos</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[16]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Croacia}></img>
                                            <p className="p3 ml-1">Croácia</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[17]}></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">23/11</p>
                                <p className="p4">07:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Alemanha}></img>
                                            <p className="p3 ml-1">Inglaterra</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[18]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Japao}></img>
                                            <p className="p3 ml-1">Japão</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[19]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">23/11</p>
                                <p className="p4">10:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Espanha}></img>
                                            <p className="p3 ml-1">Espanha</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[20]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {CostaRica}></img>
                                            <p className="p3 ml-1">Costa Rica</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[21]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">23/11</p>
                                <p className="p4">13:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Belgica}></img>
                                            <p className="p3 ml-1">Bélgica</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[22]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Canada}></img>
                                            <p className="p3 ml-1">Canadá</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[23]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">23/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Suica}></img>
                                            <p className="p3 ml-1">Suíça</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[24]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Camaroes}></img>
                                            <p className="p3 ml-1">Camarões</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[25]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">24/11</p>
                                <p className="p4">07:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Uruguai}></img>
                                            <p className="p3 ml-1">Uruguai</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[26]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {CoreiaDoSul}></img>
                                            <p className="p3 ml-1">Coreia do Sul</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[27]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">24/11</p>
                                <p className="p4">10:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Portugal}></img>
                                            <p className="p3 ml-1">Portugal</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[28]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Gana}></img>
                                            <p className="p3 ml-1">Gana</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[29]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">24/11</p>
                                <p className="p4">13:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Brasil}></img>
                                            <p className="p3 ml-1">Brasil</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[30]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Servia}></img>
                                            <p className="p3 ml-1">Sérvia</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[31]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">24/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* ---------------------------------------------------------------------------------------- */}    
<p className="mensagem"></p>
                <button type = "button" className="primary-button" onClick={SalvarPalpites} >Salvar Palpites</button>
{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Gales}></img>
                                            <p className="p3 ml-1">Gales</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[32]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Ira}></img>
                                            <p className="p3 ml-1">Irã</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[33]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">25/11</p>
                                <p className="p4">07:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Catar}></img>
                                            <p className="p3 ml-1">Catar</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[34]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Senegal}></img>
                                            <p className="p3 ml-1">Senegal</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[35]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">25/11</p>
                                <p className="p4">10:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[36]}></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Equador}></img>
                                            <p className="p3 ml-1">Equador</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[37]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">25/11</p>
                                <p className="p4">13:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Inglaterra}></img>
                                            <p className="p3 ml-1">Inglaterra</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[38]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {EstadosUnidos}></img>
                                            <p className="p3 ml-1">Estados Unidos</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[39]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">25/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Tunisia}></img>
                                            <p className="p3 ml-1">Tunísia</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[40]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Australia}></img>
                                            <p className="p3 ml-1">Austrália</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[41]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">26/11</p>
                                <p className="p4">07:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Polonia}></img>
                                            <p className="p3 ml-1">Polônia</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[42]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {ArabiaSaudita}></img>
                                            <p className="p3 ml-1">Arábia Saudita</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[43]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">26/11</p>
                                <p className="p4">10:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Franca}></img>
                                            <p className="p3 ml-1">França</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[44]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Dinamarca}></img>
                                            <p className="p3 ml-1">Dinamarca</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[45]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">26/11</p>
                                <p className="p4">13:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Argentina}></img>
                                            <p className="p3 ml-1">Argentina</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[46]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Mexico}></img>
                                            <p className="p3 ml-1">México</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[47]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">26/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* ---------------------------------------------------------------------------------------- */}    
<p className="mensagem"></p>
                <button type = "button" className="primary-button" onClick={SalvarPalpites} >Salvar Palpites</button>
{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Japao}></img>
                                            <p className="p3 ml-1">Japão</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[48]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {CostaRica}></img>
                                            <p className="p3 ml-1">Costa Rica</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[49]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">27/11</p>
                                <p className="p4">07:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Belgica}></img>
                                            <p className="p3 ml-1">Bélgica</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[50]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Marrocos}></img>
                                            <p className="p3 ml-1">Marrocos</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[51]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">27/11</p>
                                <p className="p4">10:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Croacia}></img>
                                            <p className="p3 ml-1">Croácia</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[52]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Canada}></img>
                                            <p className="p3 ml-1">Canadá</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[53]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">27/11</p>
                                <p className="p4">13:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Espanha}></img>
                                            <p className="p3 ml-1">Espanha</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[54]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Alemanha}></img>
                                            <p className="p3 ml-1">Alemanha</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[55]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">27/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Camaroes}></img>
                                            <p className="p3 ml-1">Camarões</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[56]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Servia}></img>
                                            <p className="p3 ml-1">Sérvia</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[57]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">28/11</p>
                                <p className="p4">07:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {CoreiaDoSul}></img>
                                            <p className="p3 ml-1">Coreia do Sul</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[58]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Gana}></img>
                                            <p className="p3 ml-1">Gana</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[59]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">28/11</p>
                                <p className="p4">10:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Brasil}></img>
                                            <p className="p3 ml-1">Brasil</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[60]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Suica}></img>
                                            <p className="p3 ml-1">Suíca</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[61]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">28/11</p>
                                <p className="p4">13:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Portugal}></img>
                                            <p className="p3 ml-1">Portugal</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[62]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Uruguai}></img>
                                            <p className="p3 ml-1">Uruguai</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[63]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">28/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* ---------------------------------------------------------------------------------------- */}    
<p className="mensagem"></p>
                <button type = "button" className="primary-button" onClick={SalvarPalpites} >Salvar Palpites</button>
{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Equador}></img>
                                            <p className="p3 ml-1">Equador</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[64]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Senegal}></img>
                                            <p className="p3 ml-1">Senegal</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[65]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">29/11</p>
                                <p className="p4">12:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[66]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Catar}></img>
                                            <p className="p3 ml-1">Catar</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[67]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">29/11</p>
                                <p className="p4">12:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Ira}></img>
                                            <p className="p3 ml-1">Irã</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[68]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {EstadosUnidos}></img>
                                            <p className="p3 ml-1">Estados Unidos</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[69]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">29/11</p>
                                <p className="p4">16:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Gales}></img>
                                            <p className="p3 ml-1">Gales</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[70]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Inglaterra}></img>
                                            <p className="p3 ml-1">Inglaterra</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[71]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">29/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Tunisia}></img>
                                            <p className="p3 ml-1">Tunísia</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[72]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Franca}></img>
                                            <p className="p3 ml-1">França</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[73]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">30/11</p>
                                <p className="p4">12:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Australia}></img>
                                            <p className="p3 ml-1">Austrália</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[74]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Dinamarca}></img>
                                            <p className="p3 ml-1">Dinamarca</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[75]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">30/11</p>
                                <p className="p4">12:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Polonia}></img>
                                            <p className="p3 ml-1">Polõnia</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[76]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Argentina}></img>
                                            <p className="p3 ml-1">Argentina</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[77]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">30/11</p>
                                <p className="p4">16:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {ArabiaSaudita}></img>
                                            <p className="p3 ml-1">Arábia Saudita</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[78]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Mexico}></img>
                                            <p className="p3 ml-1">México</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[79]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">30/11</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* ---------------------------------------------------------------------------------------- */}    
<p className="mensagem"></p>
                <button type = "button" className="primary-button" onClick={SalvarPalpites} >Salvar Palpites</button>
{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Croacia}></img>
                                            <p className="p3 ml-1">Croácia</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[80]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Belgica}></img>
                                            <p className="p3 ml-1">Bélgica</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[81]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">01/12</p>
                                <p className="p4">12:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Canada}></img>
                                            <p className="p3 ml-1">Canadá</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[82]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Marrocos}></img>
                                            <p className="p3 ml-1">Marrocos</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[83]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">01/12</p>
                                <p className="p4">12:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Japao}></img>
                                            <p className="p3 ml-1">Japão</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[84]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Espanha}></img>
                                            <p className="p3 ml-1">Espanha</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[85]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">01/12</p>
                                <p className="p4">16:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {CostaRica}></img>
                                            <p className="p3 ml-1">Costa Rica</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[86]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Alemanha}></img>
                                            <p className="p3 ml-1">Alemanha</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[87]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">01/12</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {CoreiaDoSul}></img>
                                            <p className="p3 ml-1">Coreia do Sul</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[88]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Portugal}></img>
                                            <p className="p3 ml-1">Portugal</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[89]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">02/12</p>
                                <p className="p4">12:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Gana}></img>
                                            <p className="p3 ml-1">Gana</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[90]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Uruguai}></img>
                                            <p className="p3 ml-1">Uruguai</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[91]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">02/12</p>
                                <p className="p4">12:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}
<div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
{/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Servia}></img>
                                            <p className="p3 ml-1">Sérvia</p>
                                        </div>
{/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[92]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Suica}></img>
                                            <p className="p3 ml-1">Suíça</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[93]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">02/12</p>
                                <p className="p4">16:00</p>
                            </div>  
                            {/* ---------------------------------------------------------------------------------------- */}         
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        {/* -------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Camaroes}></img>
                                            <p className="p3 ml-1">Camarões</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[94]} ></input>
                                </div>
                                <div className="flex-between">
                                    {/* ---------------------------------------------------------------------------------------- */}
                                        <div className="flex">
                                            <img src = {Brasil}></img>
                                            <p className="p3 ml-1">Brasil</p>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------- */}
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder={userOn.palpites[95]} ></input>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <div className="informações flex-collumn">
                                <p className="p4">02/12</p>
                                <p className="p4">16:00</p>
                            </div>           
                            {/* ---------------------------------------------------------------------------------------- */}
                        </div>  
                    </div>

{/* ---------------------------------------------------------------------------------------- */}    
<p className="mensagem"></p>
                <button type = "button" className="primary-button" onClick={SalvarPalpites} >Salvar Palpites</button>
{/* //----------------------------------------------------------------------------------------// */}
                    
                </section>
                

                

            </section>
            
        </>
    )
}

export default Guess;