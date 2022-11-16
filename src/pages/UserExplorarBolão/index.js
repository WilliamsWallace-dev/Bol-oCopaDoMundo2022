
import Header from "../../components/Header";
import FormExplorarBolão from "../../components/Form/ExplorarBolão";
import MenuBolão from "../../components/MenuBolão";


const UserExplorarBolão = ()=>{
    return (
        <>
            
            <section className="container ">
  
                <MenuBolão type = "ExplorarBolão"></MenuBolão>
                <FormExplorarBolão ></FormExplorarBolão>
            </section>
        </>
    )
}

export default UserExplorarBolão;