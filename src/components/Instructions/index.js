

const Instructions = ()=>{
    return (
        <>
        <section className="flex-collumn">
            <div className="instructions ">
                    <div className="flex-between collumns codigo">
                        <p>COD	Descrição</p>
                        <p>Pontuação</p>
                    </div>

                    <div className="flex-between codigo">
                        <div className="flex">
                            <p className="mr-1">PE</p>
                            <p>	<b>Placar Exato</b> - (Ex: Palpite 2x2 - Resultado 2x2). Acertou placar exato.	</p>
                        </div>
                        <p className="pontuação">25 Pts</p>
                    </div>
                    
                    <div className="flex-between codigo">
                        <div className="flex">
                            <p className="mr-1">GV</p>
                            <p>	<b>Vencedor da partida e Gols do time vencedor</b> - (Ex: Palpite 2x1 - Resultado 2x0). Acertou o número de gols do time vencedor. Não é válido caso tenha palpitado empate.		</p>
                        </div>
                        <p className="pontuação">18 Pts</p>
                    </div>
                    
                    <div className="flex-between codigo">
                        <div className="flex">
                            <p className="mr-1">SG</p>
                            <p>	<b>Vencedor da partida e Saldo de gols</b>- (Ex: Palpite 3x2 - Resultado 2x1). Acertou o vencedor e a diferença de gols entre vencedor e perdedor.	</p>
                        </div>
                        <p className="pontuação">15 Pts</p>
                    </div>

                    <div className="flex-between codigo">
                        <div className="flex">
                            <p className="mr-1">AE</p>
                            <p>	<b>Acertou Empate - (Ex: Palpite 2x2 - Resultado 1x1).</b> Acertou que a partida terminaria em empate.	
</p>
                        </div>
                        <p className="pontuação">15 Pts</p>
                    </div>

                    <div className="flex-between codigo">
                        <div className="flex">
                            <p className="mr-1">GP</p>
                            <p>	<b>Vencedor da partida e Gols do time perdedor</b> - (Ex: Palpite 3x1 - Resultado 2x1). Acertou o número de gols do time perdador. Não é válido caso tenha palpitado empate.		</p>
                        </div>
                        <p className="pontuação">12 Pts</p>
                    </div>

                    <div className="flex-between codigo">
                        <div className="flex">
                            <p className="mr-1">VP</p>
                            <p>	<b>Apenas Vencedor da partida </b> - (Ex: Palpite 2x0 - Resultado 4x1). Acertou o vencedor da partida.	10 Pts	</p>
                        </div>
                        <p className="pontuação">6 Pts</p>
                    </div>

                    <div className="flex-between codigo">
                        <div className="flex">
                            <p className="mr-1">G1</p>
                            <p>	<b>Gols de um dos times</b> - (Ex: Palpite 2x0 - Resultado 2x1). Acertou o número de gols do vencendor.	</p>
                        </div>
                        <p className="pontuação">3 Pts</p>
                    </div>

                </div>
        </section>
        
        </>
    )
}

export default Instructions;