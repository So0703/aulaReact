import { Link } from "react-router-dom"
import formStyles from "../../components/footer/footer.module.css";

function NotFound(){
    return(
        <>
            <h1>404</h1>
            <p>Página não encontrada!</p>
            <footer className={formStyles.footer}>
            <Link to='/' className={formStyles.link}>Voltar para Home</Link>
            </footer>
        </>
    )
}

export default NotFound