


import Header from "../Header";
import Form from "../Form";
import BackgroudMain from "../BackgroudMain";


const Main = () =>{
    const formulario = "login";
    return(
        <>
            <section className="container main">
                <Header></Header>
                <BackgroudMain></BackgroudMain>
                
                <Form form = {formulario}></Form>

                
            </section>

        </>
    )
}

export default Main;