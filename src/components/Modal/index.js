
import iconeWpp from "../../svg/iconeWpp.svg"

const Modal = ({type})=>{

    function modalClose() {
        let modal = document.querySelector(".modal-background");
        modal.style.opacity = "0";
        modal.style.pointerEvents = "none";
      }


      if(type == "login"){
        return(
            <>
                <section className="flex-collumn modal-background ">
                <div class="modal">
    
                </div>
                    <div class="modal-container">
                    <h1 class="modal-title">Compartilhe!</h1>
                    <span class="modal-closed" onClick={modalClose}>X</span>
                    <div className="modal-containerText">
                    <p class="modal-content">Ao convidar alguém para participar do seu Bolão, é necessario as seguintes informaçoes:
                    <br></br>
                    1 - Link do site : <br></br><b>https://bol-o-copa-do-mundo2022-fdfg.vercel.app/</b><br></br>
                    2 - Nome do Bolão<br></br>
                    3 - Chave de entrada do Bolão<br></br>
                    *Caso não tenha a chave, registre-se e ao realizar o login, vá em "Criar Bolão".
                    </p>
                    </div>
                    <a href = "https://web.whatsapp.com/" target="_blank" ><button type = "button" className="primary-button button-wpp">WhatsApp</button></a>
                    </div>
                </section>
               
                 
            </>
        )
      }
    
}

export default Modal;