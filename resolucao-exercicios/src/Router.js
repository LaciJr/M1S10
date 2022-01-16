import {Link, Route, Routes} from 'react-router-dom'

const  Home = () => {
    return (
        <>
        <h1>Bem Vindo!</h1>
        <p>Tem café quentinho, fique á vontade!</p>
        <footer>
            <Link to="/contatos">Contatos</Link>
        </footer>
        </>
    )
};

const Contatos = () => {
    return (
        <>
        <container>
        <h1>Meus Contatos:</h1>
        <hr/>
        <a href='https://www.linkedin.com/in/laci-leal-junior-68919a139/'>Linkedin</a>
        <p>Telefone: (48) 984304732</p>
        <p>E-mail: lacilealjunior@gmail.com</p>
        </container>
        <footer>
        <Link to="/">Home</Link>
        </footer>
        </>
    )
};

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contatos" element={<Contatos/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    )
};