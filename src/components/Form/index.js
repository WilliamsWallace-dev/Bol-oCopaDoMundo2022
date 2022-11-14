

const Form = ({form})=>{
    if(form == "register"){
        return(
            <>
                <section className="form flex-collumn">
                    <h1>Seja um Jogador!</h1>
                    <p className="subtitle">Cadastre-se e se junte a seus amigos no Bolão Copa do Mundo 2022.</p>
                    <form className="flex-collumn">
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
                <section className="form  flex-collumn">
                    <h1>Realizar Login</h1>
                    <p className="subtitle">Junte-se a seus amigos no Bolão Copa do Mundo 2022.</p>
                    <form className="flex-collumn">
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
    }else if(form == "GerenciarBolões"){
        return(
            <>
                <section className="container form flex-collumn form-criarBolão">
                    <h1>Criar Bolão</h1>
                    <p className="subtitle">Copa do mundo não pode faltar o Bolão com os Amigos!</p>
                    <form className="flex-collumn">
                        <input className="input" type="text" placeholder="Nome do Bolão"></input>
                        <input className="input" type="text" placeholder="Chave de entrada"></input>
                        <input className="input" type="number" placeholder="Valor da aposta" id="valorDaAposta" name="valorDaAposta" min="0" max="500"></input>
                        <select name="tipoChavePix" id="tipoChavePix">
                            <option value="Cpf" >Cpf</option>
                            <option value="Telefone">Telefone</option>
                            <option value="E-mail">E-mail</option>
                        </select>
                        <label></label>
                        <input className="input" type="text" placeholder="Chave Pix" id="chavePix"></input>
                        
                        
                        <div>
                        <button className="primary-button">Cria Bolão</button>
                        </div>
                    </form>
                   
                </section>
                
            </>
        )
    }
    
}

export default Form;