import logo from "../../svg/logo.svg"

const Header = ()=>{
    const j = 1;

    if(j == 1){
        return (
            <>
            <header className="container header-container">
                <img src={logo} alt="logo"></img>
                <a className="link">Regras do Bolão</a>
                <div className="username flex-collumn" >
                    <a>Olá Username</a>
                    <ul className="menu-usuário">
                        <li><a className="menu-items ">Meu Perfil</a></li>
                        <li><a className="menu-items">Meus Bolôes</a></li>
                        <li><a className="menu-items ">Solicitações</a></li>
                        <a className="menu-items">Sair</a>
                    </ul>
                    
                </div>
            </header>
        </>
        )
    }else return(
        <>
            <header className="container header-container">
                <img src={logo} alt="logo"></img>
                <a className="link p2-regular">Regras do Bolão</a>
                <div style={{display:"flex"}}>
                <a className="link p2-regular">Registrar-se</a>
                <button className="primary-button" style={{margin: "0 1.5rem" }}>Entrar</button>
                </div>
            </header>
        </>
    )
}

export default Header;