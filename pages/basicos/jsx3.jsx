//arquivo jsx4 da aula, eu fiz dentro do arquivo 3

export default function jsx4(){
    const subtitulo = "Estou no JavaScript"
    const trechoh3 = <h3>{5 + 5}</h3>
    return (
        <div>
            <h1> Integração de JS e JSX</h1>
            <h2>{subtitulo}</h2>
            {trechoh3}
            <h4>{Math.max(10, 20)}</h4> {/* retorna o maior valor entre os numeros */}
            <h5>{entre(30,20,100)}</h5>
        </div>
    )
}

function entre(valor, min, max){
    if(valor >= min && valor <= max){
        return "Sim"
}else{
    return "Não"}
}