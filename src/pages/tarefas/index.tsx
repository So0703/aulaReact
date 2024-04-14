import { Link } from "react-router-dom"
import formStyles from "../../components/footer/footer.module.css";

function Tarefas(){
    return (
        <div>
            <h1>Tarefas</h1>
            <ul>
             <li>Tarefa 1</li>
             <li>Tarefa 2</li>
             <li>Tarefa 3</li>
             <li>Tarefa 4</li>   
            </ul>
            <footer className={formStyles.footer}>
            <p>&copy; 2024 - Todos os direitos reservados</p>
	        <p>Entre em contato pelo e-mail: sabrina.onishi@gmail.com</p>
            <Link to='/' className={formStyles.link}>Voltar para Home</Link>
            <Link to='/sobre' className={formStyles.link}>Saiba mais</Link>
            </footer>
        </div>
    )
}

export default Tarefas