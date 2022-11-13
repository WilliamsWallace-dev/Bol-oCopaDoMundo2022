

const MenuBolão = ({type}) => {
    if(type=="Guess"){
        return (
            <>
                <ul className=" container flex">
                        <li><button className="secundary-button active">Meus Palpites</button></li>
                        <li><button className="secundary-button">Classificação</button></li>
                        <li><button className="secundary-button">Gerenciar Bolões</button></li>
                    </ul>
            </>
        )
    }else  if(type=="Classification"){
        return (
            <>
                <ul className=" container flex">
                        <li><button className="secundary-button">Meus Palpites</button></li>
                        <li><button className="secundary-button  active">Classificação</button></li>
                        <li><button className="secundary-button">Gerenciar Bolões</button></li>
                    </ul>
            </>
        )
    }else {
        return (
            <>
                <ul className=" container flex">
                        <li><button className="secundary-button">Meus Palpites</button></li>
                        <li><button className="secundary-button">Classificação</button></li>
                        <li><button className="secundary-button active">Gerenciar Bolões</button></li>
                    </ul>
            </>
        )
    }
    
}

export default MenuBolão;