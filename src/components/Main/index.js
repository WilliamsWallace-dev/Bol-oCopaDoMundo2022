


import Header from "../Header";
import Form from "../Form";
import Background from "../Background";
import Guess from "../Guess"
import Classification from "../Classification"
import Instructions from "../Instructions";
import MenuBolão from "../MenuBolão";



const Main = () =>{
    const formulario = "GerenciarBolões";
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
            <MenuBolão type = "GerenciarBolões"></MenuBolão>
            <Form form = {formulario}></Form>
        </section>

        </>
    )
}

export default Main;