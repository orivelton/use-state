import React, { useState } from 'react';
import './App.scss';

const App = ({initialAge = 0}) => {/*

      Valor      Função para atualização
          |      |                   ___ Valor padrão 
          ↓      ↓                  ↓                     */
  const [age, setAge] = useState(initialAge);

  return (
    <>
      <button onClick={() => setAge(age - 1)}>-</button>
      <input type="text" value={age} />
      <button onClick={() => setAge(age + 1)}>+</button>

      <p><button onClick={() => setAge(initialAge)}>Reset</button></p>
    </>
  );
}

export default App;
