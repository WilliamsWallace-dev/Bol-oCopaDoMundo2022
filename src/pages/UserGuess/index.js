
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { CopaContext } from "../../Context";

import Header from "../../components/Header";
import Form from "../../components/Form/Login";
import Background from "../../components/Background";
import Guess from "../../components/Guess"
import Classification from "../../components/Classification"
import Instructions from "../../components/Instructions";
import MenuBolão from "../../components/MenuBolão";
import Regulamento from "../../components/Regulamento";

const UserGuess = ()=>{
    
    const {userOn} = useContext(CopaContext);

    if(userOn){
        return (
            <>
                
                <section className="container main">
     
                    <MenuBolão type = "Guess"></MenuBolão>
                    <Guess></Guess>
                </section>
            </>
        )
    }else {
        return(
          <>
            <Navigate to = "/"></Navigate>
          </>
        )
            
      }

    

    
}

export default UserGuess;