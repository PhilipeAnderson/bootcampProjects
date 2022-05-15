import React, { useState } from 'react';

function App() {

  const [ value, setValue ] = useState('contato@contato.com.br');
  
  const handleInputChange = (e) => {
    console.log('*** handleInputChange', e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('*** handleSubmit', data);

  };

  return (
    <>
      <h1>Formulários com React</h1>

      <form onSubmit={ handleSubmit } >
        
        <input 
          type="text" 
          name="email" 
          placeholder="email"
          value={ value } 
          onChange={ handleInputChange } 
        />

        <button type="submit">
          Enviar
        </button>

      </form>

      <p>Dados</p>
    </>
  )
}

export default App;
