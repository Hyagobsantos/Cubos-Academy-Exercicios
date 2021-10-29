import {useState} from 'react'

export default function App() { 

  const [tema, setTema] = useState('claro');

  function mudaTema(){
    const novoTema = tema === 'claro' ? 'escuro' : 'claro';
    setTema(novoTema)
  }

  return (
    <div className={`App ${tema}`}>
      <h1>Olá Mundo</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <button onClick={mudaTema}>Tema {tema === 'claro' ? '🌜' : '🌞'}</button>
    </div>
  );
}
