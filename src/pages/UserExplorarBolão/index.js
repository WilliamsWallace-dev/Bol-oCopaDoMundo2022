import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { CopaContext } from "../../Context";

import Header from "../../components/Header";
import FormExplorarBolão from "../../components/Form/ExplorarBolão";
import MenuBolão from "../../components/MenuBolão";


const UserExplorarBolão = ()=>{
    
    const {userOn} = useContext(CopaContext);

    if(userOn){
        return (
            <>
                
                <section className="container ">
      
                    <MenuBolão type = "ExplorarBolão"></MenuBolão>
                    <FormExplorarBolão ></FormExplorarBolão>
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

export default UserExplorarBolão;