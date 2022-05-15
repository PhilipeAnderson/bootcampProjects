import React, { useState } from 'react';

function App() {

  const [formValues, setFormValues] = useState({
    languages: 'javascript', 
    drink: 'cafe',
    social: { Instagram: true, LinkedIn: true}
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const isCheckbox = type === 'checkbox';
    const data = formValues[name] || {}
    if(isCheckbox){
      data[value] = checked;
    }

    const newValue = (isCheckbox) ? data : value;

    //console.log('*** handleInputChange', name, value, checked)
    console.log('*** handleInputChange', data)
    //setFormValues({...formValues, [name]: value});
    setFormValues({...formValues, [name]: newValue});
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

        <select name="languages" onChange={handleInputChange} value={formValues.languages || ''}>
          <option value="PHP">PHP</option>
          <option value="Python">Python</option>
          <option value="HtmlCss">HTML CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="RubyOnRails">RubyOnRails</option>
        </select>

        <div style={{ margin: '10px 0px'}}>
          <label>
            <input 
              type="radio" 
              value="cafe" 
              name="drink" 
              onChange={handleInputChange} 
              checked={formValues.drink === 'cafe'}
            /> Café
          </label>

          <label>
            <input 
              type="radio" 
              value="cha" 
              name="drink" 
              onChange={handleInputChange} 
              checked={formValues.drink === 'cha'}
            /> Chá
          </label>
        </div>

        <div className="checks">
          <label> 
            <input 
              type="checkbox" 
              name="social" 
              value="Twitter" 
              onChange={handleInputChange} 
            /> Twitter 
          </label>
          <label> 
            <input 
              type="checkbox" 
              name="social" 
              value="Facebook" 
              onChange={handleInputChange} 
            /> Facebook 
          </label>
          <label> 
            <input 
              type="checkbox" 
              name="social" 
              value="Instagram" 
              onChange={handleInputChange}
              checked={formValues.social && formValues.social.Instagram === true}
            /> Instagram 
          </label>
          <label> 
            <input 
              type="checkbox" 
              name="social" 
              value="LinkedIn" 
              onChange={handleInputChange} 
              checked={formValues.social && formValues.social.LinkedIn}
            /> LinkedIn 
          </label>
        </div>

        <textarea 
          name="bio" 
          onChange={handleInputChange} 
          value={formValues.bio || ''}
        >   
        </textarea>

        <button type="submit">
          Enviar
        </button>

      </form>

      <p>Dados</p>
    </>
  )
}

export default App;
