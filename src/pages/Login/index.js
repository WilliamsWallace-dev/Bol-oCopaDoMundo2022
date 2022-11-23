
import Header from "../../components/Header";
import FormLogin from "../../components/Form/Login";

import TelaDeTransicao from "../../components/TelaDeTransicao";
import Modal from "../../components/Modal/index"
import TelaInicial from "../../components/TelaInicial";
import Footer from "../../components/Footer";

const Login = ()=>{

                return(
                    <>
                    <section className="container main">
                        <FormLogin ></FormLogin>
                    </section>
                    <Footer></Footer>
                    </>
                )
}

export default Login;