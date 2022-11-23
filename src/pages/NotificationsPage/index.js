import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { CopaContext } from "../../Context";


import Notifications from "../../components/Notifications";
import MenuBolão from "../../components/MenuBolão";
import Footer from "../../components/Footer";
const NotificationsPage = ()=>{
    
    const {userOn} = useContext(CopaContext);

    if(userOn){
        return (
            <>
                
                <section className="container ">
                    <MenuBolão type = "none"></MenuBolão>
                    <Notifications></Notifications>
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

export default NotificationsPage;