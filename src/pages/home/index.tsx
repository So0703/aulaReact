import { Link } from "react-router-dom"
//<img src=""/>

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <p>Teste react</p>
            <Link to='/Formulario'>Formulario</Link>
            <br></br>
            <Link to='/Tarefas'>Tarefas</Link>
            <br></br>
            <Link to='/Sobre'>Sobre</Link>
        </div>
    )
}

export default Home