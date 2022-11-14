

const MenuBolão = ({type}) => {
    if(type=="Guess"){
        return (
            <>
                <ul className=" container flex">
                        <li><button className="secundary-button active">Meus Palpites</button></li>
                        <li><button className="secundary-button">Classificação</button></li>
                        <li><button className="secundary-button">Criar Bolão</button></li>
                        <li><button className="secundary-button">Explorar Bolões</button></li>
                    </ul>
            </>
        )
    }else  if(type=="Classification"){
        return (
            <>
                <ul className=" container flex">
                        <li><button className="secundary-button">Meus Palpites</button></li>
                        <li><button className="secundary-button  active">Classificação</button></li>
                        <li><button className="secundary-button">Criar Bolão</button></li>
                        <li><button className="secundary-button">Explorar Bolões</button></li>
                    </ul>
            </>
        )
    }else  if(type=="CriarBolão"){
        return (
            <>
                <ul className=" container flex">
                        <li><button className="secundary-button">Meus Palpites</button></li>
                        <li><button className="secundary-button">Classificação</button></li>
                        <li><button className="secundary-button active">Criar Bolão</button></li>
                        <li><button className="secundary-button">Explorar Bolões</button></li>
                    </ul>
            </>
        )
    }else if(type=="ExplorarBolão") {
        return (
            <>
                <ul className=" container flex">
                        <li><button className="secundary-button">Meus Palpites</button></li>
                        <li><button className="secundary-button">Classificação</button></li>
                        <li><button className="secundary-button">Criar Bolão</button></li>
                        <li><button className="secundary-button active">Explorar Bolões</button></li>
                    </ul>
            </>
        )
    }
    
}

export default MenuBolão;