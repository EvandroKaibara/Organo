import './Rodape.css'

function Rodape(){
    return (
        <header className="rodape">
            <div className='redes-sociais'>
                <img src="/imagens/fb.png"/>
                <img src="/imagens/tw.png"/>
                <img src="/imagens/ig.png"/>
            </div>
            <div className='logo'>
                <img src="/imagens/logo.png"/>
            </div>
            <span>
                Desenvolvido por Alura.
            </span>
        </header>
    )
}

export default Rodape