//Utilizando o componente Titulo de outro arquivo

import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir"/>
            <Titulo
                principal="Página de Login"
                secundario="Informe seu email e senha"
                pequeno={true}/>
        </div>
    )
}