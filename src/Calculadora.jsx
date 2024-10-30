import React, { Component, useState } from "react";
import Digitos from "./digitos";
import './Style/Calculadora.css';

class Calculadora extends Component {    
    render(){
        return <div className="container">
            <div className="calculadora">
                <Digitos /> 
            </div>
        </div>
    }
}

export default Calculadora;
