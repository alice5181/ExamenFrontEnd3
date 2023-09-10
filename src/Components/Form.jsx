import React, { useState } from "react";
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (name.trim() === '' || name.trim().length < 3) {
      setErrorMessage('Por favor ingresa un nombre válido (mínimo 3 caracteres).');
      setSuccessMessage(''); // Limpiar el mensaje de éxito
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      setSuccessMessage(''); // Limpiar el mensaje de éxito
    } else {
      // Si pasa las validaciones
      setErrorMessage('');
      setSuccessMessage(`Hola ${name.trim()}, te contactaremos cuanto antes a través de tu correo electrónico.`);
      // Aquí puedes enviar los datos del formulario o realizar otras acciones
    }
  };

  const handleNameChange = (event) => {
    // Limpiar el mensaje de error al modificar el nombre
    setErrorMessage('');
    setSuccessMessage(''); // Limpiar el mensaje de éxito
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    // Limpiar el mensaje de error al modificar el correo electrónico
    setErrorMessage('');
    setSuccessMessage(''); // Limpiar el mensaje de éxito
    setEmail(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="main-form">
        <label>Full name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
