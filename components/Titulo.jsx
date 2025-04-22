//Criando propriedades para o componente Titulo

export default function Titulo(props){
    console.log(props)

    return props.pequeno ? (
        <>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
        </>
    ) : (
        <>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </>
    )

    //Alternativa mais iniciante:
    
    // if(props.pequeno){
    //     return(
    //         <>
    //             <p>{props.principal}</p>
    //             <p>{props.secundario}</p>
    //         </>
    //     )
    // }
    // else{
    //     return(
    //         <>
    //             <h1>{props.principal}</h1>
    //             <h2>{props.secundario}</h2>
    //         </>
    //     )
    // }
}