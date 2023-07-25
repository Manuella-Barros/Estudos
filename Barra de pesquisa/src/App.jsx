import { useEffect, useState } from "react";

const pessoas = [
  {genero: 'homem', nome: 'itallo', id: 1},
  {genero: 'mulher', nome: 'manu', id: 2},
  {genero: 'homem', nome: 'pedro', id: 3},
  {genero: 'homem', nome: 'raul', id: 4},
  {genero: 'mulher', nome: 'thaissa', id: 5},
  {genero: 'mulher', nome: 'vitoria', id: 6},
  {genero: 'homem', nome: 'joao', id: 7},
]

async function getValores(){
  const resposta = await fetch('https://api.adviceslip.com/advice').then(res => res.json());
  return resposta;
}

function App() {
  //Fez esses 2 Hooks para n mudar o valor recebido pelo fetch
  const [valores, setValores] = useState(null); // Valores a serem filtrados
  const [valoresFiltrados, setValoresFiltrados] = useState(null); // Só os valores filtrados

  useEffect(() => {
    getValores().then(res => {
      setValores(pessoas) //Pega todos os valores a serem filtrados
    })
  }, [])

  function filtrar(e){ // Retorna os valores filtrados
    let dadosBusca;

    if(e.type == "change"){ // Se for input, filtrando por nome
      dadosBusca = e.target.value; // Pega oq a pessoa digitou

      return valores.filter(valor => {
        if((valor.nome).includes(dadosBusca)){
          return valor;
        }
      })
      
    } else{ // Se for botão, filtrando por genero
      dadosBusca = e.target.innerText.toLowerCase(); // Pega oq está escrito no botão

      return valores.filter(pessoa => {
        if(dadosBusca == pessoa.genero){
          return pessoa;
        } else if(dadosBusca == "ver todos"){
          return pessoa;
        }
      })      
    }
  }  

  return (
    <>
      <input type="text" placeholder="digite aqui" onChange={(e) =>{setValoresFiltrados(filtrar(e))}}></input>

      <button onClick={(e)=>{setValoresFiltrados(filtrar(e))}}>Homem</button>
      <button onClick={(e)=>{setValoresFiltrados(filtrar(e))}}>Mulher</button>
      <button onClick={(e)=>{setValoresFiltrados(filtrar(e))}}>Ver todos</button>

      <ul>
        {
          valoresFiltrados && valoresFiltrados.map(pessoa => {
            return <li key={pessoa.id}>{pessoa.nome}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
