


import Header from "../Header";
import Form from "../Form";
import Background from "../Background";
import Guess from "../Guess"
import Classification from "../Classification"
import Instructions from "../Instructions";
import MenuBolão from "../MenuBolão";
import Regulamento from "../Regulamento";



const Main = () =>{
    const formulario = "CriarBolão";
    const type = 2;
    return(

        // <>
        //     <section className="container main">
        //         <Background type = {type}></Background>
        //         <Header></Header>
                // <Form form = {formulario}></Form>
                
        //     </section>

        // </>

        // <>
        // <section className="container main">
        //     <Background type = {type}></Background>
        //     <Header></Header>
        // <MenuBolão type = "Guess"></MenuBolão>
        //     <Guess></Guess>
            
        // </section>

        // </>

        // <>
        // <section className="container">
        //     <Background type = {type}></Background>
        //     <Header></Header>
        // <MenuBolão type = "Classification"></MenuBolão>
        //     <Classification></Classification>
        //     <Instructions></Instructions>

            
        // </section>

        // </>

        <>
        <section className="container">
            <Background type = {type}></Background>
            <Header></Header>
            <MenuBolão type = "CriarBolão"></MenuBolão>
            <Form form = {formulario}></Form>
        </section>

        </>

        // <>
        // <section className="container">
        //     <Background type = {type}></Background>
        //     <Header></Header>
        //     <MenuBolão type = "ExplorarBolão"></MenuBolão>
        //     <Form form = {formulario}></Form>
        // </section>

        // </>


        // <>
        // <section className="container">
        //     <Background type = {type}></Background>
        //     <Header></Header>
        //     <Regulamento></Regulamento>
        // </section>

        // </>
    )
}

export default Main;