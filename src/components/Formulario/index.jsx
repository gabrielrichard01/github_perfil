import { useState, useEffect } from "react";

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [props]);

    useEffect(() => {
        console.log("O estado mudou")
    }, [nome]);

    useEffect(() => {
        console.log("A materia A mudou para: " + materiaA)
    }, [materiaA]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7){
            return(
                <p>Olá {nome},Você foi aprovado</p>
            )
        }else{
            return(
                <p>Olá {nome},Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota da materia A" onChange={({target}) => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota da materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota da materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {materiaA}
            {materiaB}
            {materiaC}
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;