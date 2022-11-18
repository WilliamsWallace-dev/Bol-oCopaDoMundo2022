
import Notifications from "../../components/Notifications";
import MenuBolão from "../../components/MenuBolão";

const NotificationsPage = ()=>{
    return (
        <>
            
            <section className="container ">
                <MenuBolão type = "none"></MenuBolão>
                <Notifications></Notifications>
            </section>
        </>
    )
}

export default NotificationsPage;