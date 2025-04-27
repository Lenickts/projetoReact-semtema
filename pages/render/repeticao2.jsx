import listaProdutos from '../../data/listaProdutos'
export default function Repeticao2() {

    const comBorda = {
        border: '3px solid #fff',
        padding: '10px',
        margin: '10px',        
    }

    function renderizarLinhas(){
        return listaProdutos.map(produto => {
            return(
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }
    return(
        <div>
            <table style={comBorda}>
                <thead>
                    <tr>
                        <th>Códito</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}