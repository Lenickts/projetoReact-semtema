export default function Repeticao1(){
    const listaAprovados = [
        'Joao',
        'Maria',
        'Pedro',
        'Ana',
        'Lucas',
        'Fernanda',
        'Carlos',
    ]

    function renderizarLista(){
        return listaAprovados.map((nome,i) => <li key={i}>{nome}</li>)
    }  //usamos arrow function e map para simplificar o código, tornando-o mais legível e conciso. O método map() percorre cada elemento do array listaAprovados e retorna um novo array com os elementos transformados.

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}

//key={i} é necessário para o React identificar que cada item da lista possui uma chave única, evitando problemas de renderização e performance.




//Backup pois esse método também funciona, mas é mais verboso e menos legível
    // function renderizarLista(){
    //     const itens = []
        
    //     for (let i = 0; i < listaAprovados.length; i++){
    //         itens.push(<li key={i}>{listaAprovados[i]}</li>)
    //     }

    //     return itens
    // }