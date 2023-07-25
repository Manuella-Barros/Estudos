import React, { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const input = useRef();
  const [tarefas, setTarefas] = useState([]);
  const [contador, setContador] = useState(0);
  const [filtro, setFiltro] = useState([]);
  let valor_input;
  
  /*
  function add(){
    let input = document.getElementById('input_tarefa').value;
    document.getElementById('lista_tarefa').innerHTML += `<li>${input}</li>`;
  }
  */

  function add(){
    setContador(prevValue => prevValue+1);
    setTarefas(prevValue => [ ...prevValue, input.current.value]);
  }

  function filtrar(e){
    valor_input = e.target.value;

    return tarefas.filter(tarefa => {
      if(tarefa.includes(valor_input)){
        return tarefa;
      }
    })
  }
  
  return (
    <main id={'wrapper'}>
        <section>
            <h2>To Do</h2>
            <input ref={input} id={'input_tarefa'} type="text"/>
            <button onClick={add}>Adicionar!</button>
        </section>

        <section>
            <h2>Filtrar</h2>
            <input onChange={(e) => setFiltro(filtrar(e))} id={'input_filtro'} type="text"/>
            {console.log(filtro)}
        </section>

        <section>
            <h2>Minha Lista:</h2>
            <ul id='lista_tarefa'>
              {filtro == "" 
                ? tarefas.map((tarefa, i) => <li key={i}>{tarefa}</li>)
                : filtro.map((filtro, i) => <li key={i}>{filtro}</li>)}
            </ul>
        </section>
    </main>
  );
}

export default App;