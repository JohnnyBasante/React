import React, { useState } from 'react';

const Main = () => {
  const [inputText, setInputText] = useState('');
  const [resultado, setResultado] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const analizarTexto = () => {
    const texto = inputText.toLowerCase().replace(/[\W_]/g, '');
    const textoReverso = texto.split('').reverse().join('');

    if (texto === textoReverso) {
      setResultado(`El texto "${inputText}" es capicúa.`);
    } else {
      setResultado(`El texto "${inputText}" no es capicúa.`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Introduce un texto..."
      />
      <p>
      <button onClick={analizarTexto}>Analizar</button>
      </p>
      <p>
        {resultado}
      </p>
    </div>
  );
};

export default Main;