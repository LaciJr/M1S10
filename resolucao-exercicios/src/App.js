import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
// import { AlteraTema, AutenticatorProvider, IsAut, Usuario } from "./Usuario";

// export default function App() {

//   const reducer = (state,action) => {
//     switch(action.type) {
//       case 'Somar':
//         return {result:parseFloat(state.result) + parseFloat(action.payload)};
//       case 'Subtrair':
//         return {result: parseFloat(state.result) - parseFloat(action.payload)};
//       case 'Multiplicar':
//         return {result: parseFloat(state.result)*parseFloat(action.payload)};
//       case 'Dividir':
//         return {result: parseFloat(state.result)/parseFloat(action.payload)};
//       default:
//         throw new Error();
//     }
//   }

//   const [state, dispatch] = useReducer(reducer,{result: 0});

//   const [data, setData] = useState({operacao: 'Somar', valor: 0})

//   const handleChangeValor = (e) => {
//     if (e.target.value !== '0') {
//       setData({...data, valor: e.target.value})
//     }
//   }
 
//   const handleChangeOp = (e) => {
//     setData({...data, operacao: e.target.value});
//   }

//   return ( 
//   <>
//     <h1>Calculadora</h1>
//     <input type='number' onChange={handleChangeValor}/>
//     <select  onChange={handleChangeOp}>
//       <option value={'Somar'}>Somar</option>
//       <option value={'Subtrair'}>Subtrair</option>
//       <option value={'Multiplicar'}>Multiplicar</option>
//       <option value={'Dividir'}>Dividir</option>
//     </select>
//     <button onClick={()=>dispatch({type: data.operacao, payload: data.valor })}>Calcular</button>
//     <p>{state.result}</p>
//   </>
//   );
// }

// export default function App() {
//   return (
//    <AutenticatorProvider>
//      <IsAut/>
//      <Usuario/>
//      <AlteraTema/>
//    </AutenticatorProvider>
//   )
// }

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </>
  )
}