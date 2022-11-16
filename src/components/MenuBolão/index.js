import {Outlet,Link} from "react-router-dom";


const MenuBolão = ({type}) => {
    if(type=="Guess"){
        return (
            <>
                <ul className=" container flex">
                    <Link to="/palpites"><li><button className="secundary-button active">Meus Palpites</button></li></Link>
                    <Link to="/classificação"><li><button className="secundary-button">Classificação</button></li></Link>
                    <Link to="/criarbolão"><li><button className="secundary-button">Criar Bolão</button></li></Link>
                    <Link to="/explorarbolão"><li><button className="secundary-button">Explorar Bolões</button></li></Link>
                </ul>
            </>
        )
    }else  if(type=="Classification"){
        return (
            <>
                <ul className=" container flex">
                <Link to="/palpites"><li><button className="secundary-button ">Meus Palpites</button></li></Link>
                    <Link to="/classificação"><li><button className="secundary-button active">Classificação</button></li></Link>
                    <Link to="/criarbolão"><li><button className="secundary-button">Criar Bolão</button></li></Link>
                    <Link to="/explorarbolão"><li><button className="secundary-button">Explorar Bolões</button></li></Link>
                    </ul>
            </>
        )
    }else  if(type=="CriarBolão"){
        return (
            <>
                <ul className=" container flex">
                <Link to="/palpites"><li><button className="secundary-button ">Meus Palpites</button></li></Link>
                    <Link to="/classificação"><li><button className="secundary-button ">Classificação</button></li></Link>
                    <Link to="/criarbolão"><li><button className="secundary-button active">Criar Bolão</button></li></Link>
                    <Link to="/explorarbolão"><li><button className="secundary-button">Explorar Bolões</button></li></Link>
                    </ul>
            </>
        )
    }else if(type=="ExplorarBolão") {
        return (
            <>
                <ul className=" container flex">
                <Link to="/palpites"><li><button className="secundary-button ">Meus Palpites</button></li></Link>
                    <Link to="/classificação"><li><button className="secundary-button ">Classificação</button></li></Link>
                    <Link to="/criarbolão"><li><button className="secundary-button">Criar Bolão</button></li></Link>
                    <Link to="/explorarbolão"><li><button className="secundary-button active" >Explorar Bolões</button></li></Link>
                    </ul>
            </>
        )
    }
    
}

export default MenuBolão;

<Link to="/login"></Link>