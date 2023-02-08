import { useState } from 'react';
import Alunos from './AlunosV1';

function App() {

  const [name, setName] = useState("Simon Costa");

  return (
    <div>
      <h1>ESCOLA</h1>
      <hr />
      <Alunos name={name} setName={setName} />
    </div>
  )
}

export default App
