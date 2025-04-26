export default function SomaUm(props){
    //props.numero++
    return(
        <div>
            <h1>{props.numero + 1}</h1>
            
        </div>
    )
}

//componente criado apenas para exemplificar de que são SOMENTE LEITURA
// o props, ou seja, não podem ser alterados dentro do componente.
//em próximas aulas terá aprofundamento sobre o conceito de props e como utilizá-los
