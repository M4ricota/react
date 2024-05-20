import React, { useState } from "react";
import Titulo from "./titulo";
import ItemLista from "./itemLista";
import Button from "./botaoAdd";
import { v4 } from 'uuid';


function Lista(){
    const [titulo, setTitulo] = useState('')
    const [lista, setlista] = useState([
        { id: v4(), marcada: false, descricao: ''}
    ])
    const adicionarItem = () => setlista(
       [...lista, { id: v4(), marcada: false, descricao: ''}])

    const alterarTitulo = valor => setTitulo(valor)
    const alterarDescricao = (valor, index) => {
        const arrayAux = [...lista]
        arrayAux[index] = valor
        setlista(arrayAux) 
    }
    const setChecked = (checked, index) => {
        const arrayAux = [...lista]
        arrayAux[index] = {...lista[index], marcada: checked}
        setlista(arrayAux) 
    }
    function onDelete(index){
        const arrayAux = [...lis]
        arrayAux.splice(index, 1)
        setlista(arrayAux)
    }
    return (
        <>
        <Titulo  
        alterarTitulo={setTitulo}
        />
        {lista.map((item, index) => (
            <ItemLista
            alterarDescricao = {alterarDescricao}
            setChecked = {setChecked}
            onDelete = {onDelete}
            index = {index}
            key = {lista[index].id}
            />
        ))}

        <Button  adicionarItem={adicionarItem}/>
        </>
    )
}

export default Lista