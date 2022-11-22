
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
                <section className="flex-collumn modal-background">
                <div class="modal">
    
                </div>
                    <div class="modal-container">
                    <h1 class="modal-title">Compartilhe!</h1>
                    <span class="modal-closed" onClick={modalClose}>X</span>
                    <div className="modal-containerText">
                    <p class="modal-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum delectus illum mollitia repellendus assumenda, dolorem doloribus magni! Exercitationem, vero. Laboriosam, delectus architecto sed accusantium vero voluptates libero quasi porro? Maxime.</p>
                    </div>
                    <a href = "https://web.whatsapp.com/" target="_blank" ><button type = "button" className="primary-button button-wpp">WhatsApp</button></a>
                    </div>
                </section>
               
                 
            </>
        )
      }
    
}

export default Modal;