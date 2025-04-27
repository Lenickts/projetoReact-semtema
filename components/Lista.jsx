export default function Lista(props){
    return(
        <div>
            <h1 style={{
                backgroundColor: "#000",
                color: "#FFF",
                padding: "20px",
                marginBottom: "20px",
            }}>
                Lista de Algo
            </h1>
            <ul style={{
                listStyle:"none",
                padding: 0,
            }}>
                {props.children}
            </ul>
        </div>        
    )
}

//Trabalhando com itens flexiveis
