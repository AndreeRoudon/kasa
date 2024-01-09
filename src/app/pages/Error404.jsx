import {Link} from "react-router-dom";

function Error404() {
    return (
        <div className="page-error">
            <span>404</span>
            <p>Oups! La page que vous demandez n{"'"}existe pas.</p>
            <Link to={"/"} className="linkBack"> retour à la page d{"'"}accueil</Link>
        </div>
    );
}

export default Error404;