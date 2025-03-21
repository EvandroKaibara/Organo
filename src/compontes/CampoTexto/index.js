import './CampoTexto.css'

const CampoTexto = (props) =>{
    // props concatenadas
    const placeholderModificada = `${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto