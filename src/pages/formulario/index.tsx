import { Link } from "react-router-dom"
import Form from "../../components/form";
import formStyles from "../../components/footer/footer.module.css";

function Formulario(){
    return (
        <div>
            <h1>Formulário</h1>
            <Form></Form>
            <footer className={formStyles.footer}>
            <p>&copy; 2024 - Todos os direitos reservados</p>
	        <p>Entre em contato pelo e-mail: sabrina.onishi@gmail.com</p>
            <Link to='/' className={formStyles.link}>Voltar para Home</Link>
            <Link to='/sobre' className={formStyles.link}>Saiba mais</Link>
            </footer>
        </div>
    )
}

export default Formulario