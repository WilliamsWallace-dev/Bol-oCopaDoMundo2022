import bola from  "../../svg/bola1.svg"

const TelaDeTransicao = ()=>{

    return(
        <>
        <section className="transicao">
                <div className="transicao-background"></div>
                <div>
                    <img className="bola" src = {bola}></img>
                </div>
        </section>
            
        </>
    )
}

export default TelaDeTransicao;