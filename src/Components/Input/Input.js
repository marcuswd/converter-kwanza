import React from 'react';

const Input = ({dados}) => {
  console.log(dados);
  return (
    <div className="single-input">
      <label htmlFor={dados}>{dados}</label>
      <input type="text" id={dados} />
    </div>
  )
}

export default Input
