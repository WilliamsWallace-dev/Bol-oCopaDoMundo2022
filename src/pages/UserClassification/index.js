
import Header from "../../components/Header";
import Form from "../../components/Form/Login";
import Background from "../../components/Background";
import Guess from "../../components/Guess"
import Classification from "../../components/Classification"
import Instructions from "../../components/Instructions";
import MenuBolão from "../../components/MenuBolão";
import Regulamento from "../../components/Regulamento";

const UserClassification = ()=>{
    return (
        <>
            
            <section className="container ">
                <MenuBolão type = "Classification"></MenuBolão>
                <Classification></Classification>
                <Instructions></Instructions>
            </section>
        </>
    )
}

export default UserClassification;