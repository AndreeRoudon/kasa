import '../../styles/components/cardLogement.scss'
import { Link } from "react-router-dom";

function CardLogement(props) {
    return (
        <Link to={`/logement/${props.logementID}`} className={"cardsLogement"}>
            <h2 className={"titleCard"}> {props.title} </h2>
            <img src={props.cover} />
        </Link>
    );
}

export default CardLogement;