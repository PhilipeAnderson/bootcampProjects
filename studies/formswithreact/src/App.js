import React, { useState } from 'react';

function App() {

  const [formValues, setFormValues] = useState({});



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('*** handleInputChange', name, value)
    setFormValues({...formValues, [name]: value});
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
        />

        <input
          type="text"
          name="email"
          placeholder="Type your email"
          onChange={handleInputChange}
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
