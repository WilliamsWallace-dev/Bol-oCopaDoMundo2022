

const Form = ({form})=>{
    if(form == "register"){
        return(
            <>
                <section className="form flex-collumn">
                    <h1>Seja um Jogador!</h1>
                    <p className="subtitle">Cadastre-se e se junte a seus amigos no Bolão Copa do Mundo 2022.</p>
                    <form>
                        <input className="input" type="text" placeholder="Username"></input>
                        <input className="input" type="text" placeholder="Senha"></input>
                        <input className="input" type="text" placeholder="Confirmar Senha"></input>
                        <div>
                        <button className="primary-button">Cadastrar</button>
                        <button className="secundary-button">Compartilhar com os amigos!</button>
                        </div>
                    </form>
                    
                </section>
                
            </>
        )
    }else if(form == "login"){
        return(
            <>
                <section className="form flex-collumn">
                    <h1>Realizar Login</h1>
                    <p className="subtitle">Junte-se a seus amigos no Bolão Copa do Mundo 2022.</p>
                    <form>
                        <input className="input" type="text" placeholder="Username"></input>
                        <input className="input" type="text" placeholder="Senha"></input>
                        <div>
                        <button className="primary-button">Cadastrar</button>
                        <button className="secundary-button">Compartilhar com os amigos!</button>
                        </div>
                    </form>
                   
                </section>
                
            </>
        )
    }
    
}

export default Form;