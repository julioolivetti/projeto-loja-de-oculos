import './estilo.css'

export default function SecaoContato () {
    return (
        <section id="contato" className='secao-contato'>
            <div className='limitar-secao'>
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className='box-contatos'>
                    <div className='contato'>
                        <h3>Contato</h3>
                        <div className='box-icone'>
                            <img src="../assets/local.png" alt="Local" title="Local"></img>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className='box-icone'>
                            <img src="../assets/telefone.png" alt="telefone" title="telefone"></img>
                            <p>(21) 9999-9999</p>
                        </div>
                        <div className='box-icone'>
                            <img src="../assets/email.png" alt="email" title="email"></img>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className='contato'>
                        <h3>Nossas Redes Sociais</h3>
                        <div className='box-icone'>
                            <img src="../assets/fb.png" alt="Facebook" title="Facebook"></img>
                            <p>/OticaVida</p>
                        </div>
                        <div className='box-icone'>
                            <img src="../assets/ig.png" alt="Instagram" title="Instagram"></img>
                            <p>@oticavidarj</p>
                        </div>
                        <div className='box-icone'>
                            <img src="../assets/tt.png" alt="Tweeter" title="Tweeter"></img>
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}