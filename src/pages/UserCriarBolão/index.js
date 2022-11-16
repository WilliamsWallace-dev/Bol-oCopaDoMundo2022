
import Header from "../../components/Header";
import FormCriarBolão from "../../components/Form/CriarBolão";
import MenuBolão from "../../components/MenuBolão";

const UserCriarBolão = ()=>{
    return (
        <>
            
            <section className="container ">
 
                <MenuBolão type = "CriarBolão"></MenuBolão>
                <FormCriarBolão></FormCriarBolão>
            </section>
        </>
    )
}

export default UserCriarBolão;