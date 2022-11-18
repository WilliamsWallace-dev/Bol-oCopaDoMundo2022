 
import Classification from "../../components/Classification"
import Instructions from "../../components/Instructions";
import MenuBolão from "../../components/MenuBolão";
 

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