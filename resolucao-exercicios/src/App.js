import { useReducer } from "react";
import React from 'react';

function App() {

  const getDate = () => {
    let date = new Date();
    let dia = date.getUTCDate();
    let mes = date.getMonth() + 1;
    let ano = date.getUTCFullYear();
    let hora = date.getHours();
    let min = date.getMinutes();
    return `${dia}-${mes}-${ano} ${hora}:${min}`;
  }

  const initState = []

  const reducer = (state,action) => {
    switch(action.type) {
      case 'add':
        return [...state, getDate()];
      case 'remove':
        return state.slice(0, (state.length - 1));
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer,initState);

  return ( 
  <>
    <h1>Lista de datas</h1>
    <button onClick={()=>dispatch({type: 'add'})}>Adicionar</button>
    <button onClick={()=>dispatch({type: 'remove'})}>Remover</button>
    <ul>{state.map((valor,index) => (
      <li key={index}>{valor}</li>
    ))
    }
    </ul>
  </>
  );
}
export default App;
