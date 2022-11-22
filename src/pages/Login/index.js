
import Header from "../../components/Header";
import FormLogin from "../../components/Form/Login";

import TelaDeTransicao from "../../components/TelaDeTransicao";
import Modal from "../../components/Modal/index"
import TelaInicial from "../../components/TelaInicial";


const Login = ()=>{

            if(window.screen.width < 540){
                return(
                    <>
                    <TelaInicial></TelaInicial>
                    <section className="container main">
                        <FormLogin ></FormLogin>
                    </section>
                    </>
                )
            }
            else{
                return(
                    <>
                    <section className="container main">
                        <FormLogin ></FormLogin>
                    </section>
                    </>
                )
            }
}

export default Login;