


import Header from "../Header";
import Form from "../Form";
import Background from "../Background";
import Resources from "../Resources"


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

        <>
        <section className="container main">
            <Background type = {type}></Background>
            <Header></Header>
            <Resources></Resources>
            
        </section>

        </>
    )
}

export default Main;