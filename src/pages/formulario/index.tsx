import { Link } from "react-router-dom"
import Form from "../../components/form";
import formStyles from "../../components/form/Form.module.css";

function Formulario(){
    return (
        <div>
            <Form></Form>
            <Link to='/' className={formStyles.link}>Voltar para Home</Link>
        </div>
    )
}

export default Formulario