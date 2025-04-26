import Estilo from "@/components/Estilo";

export default function usandoEstilo(){
    return(
        <div>
            <h1>Usando Estilo</h1>
            <Estilo numero={-10}/>
            <Estilo numero={0} color="#f66" direita="true"/>
            <Estilo numero={10}/>
        </div>
    )
}