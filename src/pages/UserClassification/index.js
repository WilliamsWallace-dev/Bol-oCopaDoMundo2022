 
import Classification from "../../components/Classification"
import Instructions from "../../components/Instructions";
import MenuBolão from "../../components/MenuBolão";
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { CopaContext } from "../../Context";


const UserClassification = ()=>{
    
    const {userOn} = useContext(CopaContext);


    if(userOn){
        return (
            <>
                
                <section className="container ">
                    <MenuBolão type = "Classification"></MenuBolão>
                    <Classification></Classification>
                    <Instructions></Instructions>
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

export default UserClassification;