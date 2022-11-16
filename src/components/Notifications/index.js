import {Outlet,Link} from "react-router-dom";


const Notifications = ()=>{
    return (
        <>
            <section className="container form flex-collumn">
                    <h2>Notificações</h2>
                    <p className="subtitle">Solicitações para a entrada de palpiteiros no Bolão.</p>
                    
                    <ul className="notificações">
                        <li className="flex-collumn">
                            <p className=""><b> Nome do Jogador </b> quer participar do bolão "FulanoDeTal" </p>
                            <div className="flex">
                            <button className="secundary-button">Aceitar</button> 
                            <button className="secundary-button">Recusar</button>  
                            </div>                      
                        </li>
                    </ul>
                   
                </section>
        </>
    )
}

export default Notifications;