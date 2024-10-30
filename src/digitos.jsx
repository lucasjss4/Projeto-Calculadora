import React, { Component, useState } from "react";
import './Style/Calculadora.css';

function Digitos() {

    const [expression, setExpression] = useState('');
    const [num, setNum] = useState(0);

    const handleClick = (valor) => {
        setExpression(prevExpression => prevExpression + valor);
    }

    const limparResultado = () => {
        setExpression('');
    }

    const resultado = () => {
        const resultado = eval(expression);
        setExpression(resultado);
    }

    const DEL = () =>{
        if(expression){
            setExpression('');
        }
        setExpression(prevExpression => prevExpression.slice(0, -1));
    }

    return (
        <div className="digitos">
            <h1 className="result">{expression ? expression : num}</h1>
            <button onClick={() => limparResultado()} id="operator">C</button>
            <button onClick={() => DEL()} id="operator">DEL</button>
            <button id="operator">%</button>
            <button onClick={() => handleClick('/')} id="operator">/</button>
            <button onClick={() => handleClick(7)}>7</button>
            <button onClick={() => handleClick(8)}>8</button>
            <button onClick={() => handleClick(9)}>9</button>
            <button onClick={() => handleClick('*')} id="operator">*</button>
            <button onClick={() => handleClick(4)}>4</button>
            <button onClick={() => handleClick(5)}>5</button>
            <button onClick={() => handleClick(6)}>6</button>
            <button onClick={() => handleClick('-')} id="operator">-</button>
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClick('+')} id="operator">+</button>
            <button></button>
            <button onClick={() => handleClick(0)}>0</button>
            <button onClick={() => handleClick(',')} id="operator">,</button>
            <button onClick={() => resultado()} id="operator">=</button>
        </div>
    );
}

export default Digitos;