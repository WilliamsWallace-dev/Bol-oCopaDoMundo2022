import logo from "../../svg/logo.svg"

const Header = ()=>{
    return(
        <>
            <header className="container header-container">
                <img src={logo} alt="logo"></img>
                <a className="link">Regras do Bolão</a>
                <div style={{display:"flex"}}>
                <a className="link">Registrar-se</a>
                <button className="primary-button" style={{margin: "0 1.5rem" }}>Entrar</button>
                </div>
            </header>
        </>
    )
}

export default Header;