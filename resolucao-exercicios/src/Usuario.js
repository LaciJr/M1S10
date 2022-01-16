import { createContext, useContext, useState } from "react";
import styles from "./Usuario.module.css"

const Autenticator = createContext();

export const AutenticatorProvider = ({children}) => {
    const [nome, setNome] = useState('Laci');
    const [autenticado, setAutenticado] = useState(false);
    const [tema, setTema] = useState(styles.light)

    return <Autenticator.Provider value={{nome, setNome, autenticado, setAutenticado, tema, setTema}}>{children}</Autenticator.Provider>
}

const useAutenticator = () => useContext(Autenticator);

export function IsAut() {
    const {nome, autenticado, tema} = useAutenticator();
  
    return (
      <div className={`${tema}`}>
        {autenticado ? <p>{nome}</p>: null}
      </div>
    )
  }
  
  export function Usuario() {
    const {autenticado, setAutenticado, tema} = useAutenticator();

    return (
      <div className={`${tema}`}>
        {autenticado ? <button className={`${tema}`} onClick={() => {setAutenticado(false)}}>Logout</button> : <button onClick={() => {setAutenticado(true)}} className={`${tema}`}>Login</button>}
      </div>
    )
  }

  export function AlteraTema() {
    const {tema, setTema} = useAutenticator();
    const container = document.getElementById('root');

    container.className = styles.container;

    return (
      <div className={`${tema} ${styles.container}`}>
        {(tema === styles.light) ? (<button onClick={() => {setTema(styles.dark)}} className={`${tema}`}>Dark</button>) : (<button onClick={() => {setTema(styles.light)}} className={`${tema}`}>Light</button>)}
      </div>
    )
  }