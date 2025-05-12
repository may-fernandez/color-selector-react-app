import React, {useState} from 'react';


function SelectorColor(){

    const [color, setColor] = useState("#FFFFFF");

    function handleCambioColor(evento){
        setColor(evento.target.value);
    }

    return(<div className = "contenedor-selector-color">
        <h1>Selector de Color</h1>
        <div className = "mostrar-color" style = {{backgroundColor: color}}>
            <p>Color Seleccionado: {color}</p>
        </div>
        
        <label>Selecciona un color: </label>
        <input type="color" value={color} onChange = {handleCambioColor}/>

    </div>);
}

export default SelectorColor