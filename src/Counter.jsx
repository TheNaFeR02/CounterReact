import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
    let [counter, setCounter] = useState(0);


    const aumentar = () => {
        setCounter(counter+1);
    }

    const reiniciar = () => {
        setCounter(0);
    }

    const disminuir = () => {
        setCounter(counter-1);
    }
    
    return (
        <>
            <div className="container">
                <div><h1>BIENVENIDO A USER RANDOM</h1></div>
                <div><h3>Contador de Usuarios</h3></div>
                <div><p>{counter}</p></div>
                <div className="buttons">
                    <button onClick={aumentar}>Aumentar</button>
                    <button onClick={reiniciar}>Reiniciar</button>
                    <button onClick={disminuir}>Disminuir</button>   
                </div>
            </div>

        </>
    );
}

export default Counter;