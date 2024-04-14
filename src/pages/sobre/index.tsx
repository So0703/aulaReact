import { Link } from "react-router-dom"
import formStyles from "../../components/footer/footer.module.css";

function Sobre(){
    return (
        <div>
            <h1>Sobre</h1>
            <p>Site criado por: Sabrina Onishi</p>
            <footer className={formStyles.footer}>
            <p>&copy; 2024 - Todos os direitos reservados</p>
	        <p>Entre em contato pelo e-mail: sabrina.onishi@gmail.com</p>
            <Link to='/' className={formStyles.link}>Voltar para Home</Link>
            </footer>
            
        </div>
        
    )
}

export default Sobre