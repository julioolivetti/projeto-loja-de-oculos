import './estilo.css'

export default function SecaoSobre () {
    return (
        <section id="sobre" className='secao-sobre'>
            <div className='limitar-secao container-sobre'>
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className='box-cards'>
                    <img src="../assets/loja.png" alt="Loja" title="Loja"></img>
                    <div className='card'>
                        <h2>NOSSAS FILIAIS</h2>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    
                    <div className='card'>
                        <h2>ATENDIMENTO FLEXÍVEL</h2>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>

                    <img src="../assets/atendimento.png" alt="Atendimento" title="Atendimento"></img>
                </div>
            </div>
        </section>
    )
}