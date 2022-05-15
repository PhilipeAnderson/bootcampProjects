import React, { useState } from 'react';

function App() {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log('*** handleInputChange', name, value)
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

      <form onSubmit={handleSubmit} >

        <input
          type="text"
          name="name"
          placeholder="Type your name"
          onChange={handleInputChange}
          value={formValues.name || ''}
        />

        <input
          type="text"
          name="email"
          placeholder="Type your email"
          onChange={handleInputChange}
          value={formValues.email || ''}
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
