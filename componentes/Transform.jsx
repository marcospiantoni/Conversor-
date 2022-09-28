import React from "react";
import { useState } from 'react';

function Transform(props) {

   const [text, setText] = useState(" ");

   function trocarTexto(event) {
    setText(event.target.value)
  }

  return (
    <div>
      <center>
        <textarea onChange={trocarTexto} name="texto" className='textarea' placeholder='Digite aqui'></textarea>
        <button className='button' onClick={() => setText(text.toUpperCase())} > Maiúscula </button>
        <button className='button' onClick={() => setText(text.toLowerCase())} > Minúscula </button>
        <h2 className='text'> {text} </h2>
      </center>
    </div>
  )
}

export default Transform;