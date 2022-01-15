import { createContext, useContext, useState } from "react";

const Autenticator = createContext();

export const AutenticatorProvider = ({children}) => {
    const [nome, setNome] = useState('Laci');
    const [autenticado, setAutenticado] = useState(false);

    return <Autenticator.Provider value={{nome, setNome, autenticado, setAutenticado}}>{children}</Autenticator.Provider>
}

const useAutenticator = () => useContext(Autenticator);

export function IsAut() {
    const {nome, setNome, autenticado, setAutenticado} = useAutenticator();
  
    return (
      <>
        {autenticado ? <p>{nome}</p>: null}
      </>
    )
  }
  
  export function Usuario() {
    const {nome, setNome, autenticado, setAutenticado} = useAutenticator();

    return (
        <>
        {autenticado ? <button onClick={() => {setAutenticado(false)}}>Logout</button> : <button onClick={() => {setAutenticado(true)}}>Login</button>}
        </>
    )
  }