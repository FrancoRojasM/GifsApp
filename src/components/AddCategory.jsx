import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue,setInputValue]=useState('');

    const onInputChange=(event)=>{
        // el target.value permite escribir en un input ya que por defecto react lo pone como un read only
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        // console.log(inputValue)
        if (inputValue.trim().length<=1)return;

        // componente recibido compsetCategories  y dentro se hace un callback
        // compsetCategories(categories=>[...categories,inputValue])
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input type='text' placeholder='Buscar GIF' value={inputValue} onChange={onInputChange} />
    </form>
  )
}


