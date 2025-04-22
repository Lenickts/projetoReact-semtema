//Criando lista de elementos com laço FOR para exibir na tela

export default function lista(){
    return(
        <div>
            <div>
                {gerarLista()}
            </div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(30)}
            </div>
        </div>
    )
}

function gerarLista(final = 10){
    const lista = []
    for(let i = 0; i <= final; i++){
        lista.push(<span>{i},</span>)
    }
    return lista
}

//Na funçao gerarLista criamos um valor padrao final de 10, onde se nenhum parâmetro for passado, o valor padrão será 10.
//Na função default criei 3 gerarLista: sem parâmetro e outras duas com parâmetro para ver a ação.