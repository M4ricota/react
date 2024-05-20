import React, { useState } from "react";

function Titulo(props) {
    
return (
        <input type='text' 
        placeholder="escreva um titulo."
        onChange={e => props.alterarTitulo(e.target.value)}/>
    )
}

export default Titulo