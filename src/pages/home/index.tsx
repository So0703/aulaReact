import { Link } from "react-router-dom"
import formStyles from "../../components/footer/footer.module.css";
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
            <footer className={formStyles.footer}>
            <p>&copy; 2024 - Todos os direitos reservados</p>
	        <p>Entre em contato pelo e-mail: sabrina.onishi@gmail.com</p>
            </footer>
            
        </div>
    )
}

export default Home