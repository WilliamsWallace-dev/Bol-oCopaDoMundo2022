


import Header from "../Header";
import Form from "../Form";
import Background from "../Background";
import Guess from "../Guess"
import Classification from "../Classification"


const Main = () =>{
    const formulario = "login";
    const type = 2;
    return(

        // <>
        //     <section className="container main">
        //         <Background type = {type}></Background>
        //         <Header></Header>
        //         <Form form = {formulario}></Form>
                
        //     </section>

        // </>

        // <>
        // <section className="container main">
        //     <Background type = {type}></Background>
        //     <Header></Header>
        //     <Guess></Guess>
            
        // </section>

        // </>

        <>
        <section className="container main">
            <Background type = {type}></Background>
            <Header></Header>
            <Classification></Classification>
            
        </section>

        </>
    )
}

export default Main;