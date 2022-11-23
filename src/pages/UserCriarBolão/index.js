
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { CopaContext } from "../../Context";

import Header from "../../components/Header";
import FormCriarBolão from "../../components/Form/CriarBolão";
import MenuBolão from "../../components/MenuBolão";
import Footer from '../../components/Footer'; 
const UserCriarBolão = ()=>{
    
    const {userOn} = useContext(CopaContext);

    if(userOn){
        return (
            <>
                
                <section className="container ">
     
                    <MenuBolão type = "CriarBolão"></MenuBolão>
                    <FormCriarBolão></FormCriarBolão>
                </section>
                <Footer></Footer>
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

export default UserCriarBolão;