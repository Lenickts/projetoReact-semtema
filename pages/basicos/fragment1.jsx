import React from 'react'

//importando o react para usar o Fragment, que permite criar um elemento sem precisar criar uma div ou outro elemento HTML, apenas para agrupar outros elementos.

//No exemplo de fragment#02 usamos <>...</> para facilitar sem importar o React.

export default function Fragment() {
    return(
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment> 
    )
}