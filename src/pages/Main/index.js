


import Header from "../../components/Header";
import Form from "../../components/Form";
import Background from "../../components/Background";
import Guess from "../../components/Guess"
import Classification from "../../components/Classification"
import Instructions from "../../components/Instructions";
import MenuBolão from "../../components/MenuBolão";
import Regulamento from "../../components/Regulamento";




const Main = () =>{
    const formulario = "CriarBolão";
    const type = "2";
    console.log("main")
    return(

        // <>
        //     <section className="container main">
        // <Background type = {type}></Background>
        //         <Header></Header>
                // <Form form = {formulario}></Form>
                
        //     </section>

        // </>

        // <>
        // <section className="container main">
        // <Background type = {type}></Background>
        //     <Header></Header>
        // <MenuBolão type = "Guess"></MenuBolão>
        //     <Guess></Guess>
            
        // </section>

        // </>

        // <>
        // <section className="container">
        // <Background type = {type}></Background>
        //     <Header></Header>
        // <MenuBolão type = "Classification"></MenuBolão>
        //     <Classification></Classification>
        //     <Instructions></Instructions>

            
        // </section>

        // </>

        <>
        <section className="container">
            {/* <Background type = {type}></Background>
            <Header type = {type}></Header> */}
            <MenuBolão type = "CriarBolão"></MenuBolão>
            <Form form = {formulario}></Form>
        </section>

        </>

        // <>
        // <section className="container">
        // <Background type = {type}></Background>
        //     <Header></Header>
        //     <MenuBolão type = "ExplorarBolão"></MenuBolão>
        //     <Form form = {formulario}></Form>
        // </section>

        // </>


        // <>
        // <section className="container">
        // <Background type = {type}></Background>
        //     <Header></Header>
        //     <Regulamento></Regulamento>
        // </section>

        // </>
    )
}

export default Main;