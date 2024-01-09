import {useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import Accordion from "../composants/Accordion.jsx";
import Carrousel from "../composants/Carrousel.jsx";
import {useEffect, useState} from "react";

function Logement() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [logementEnCours, setLogementEncours] = useState(null);
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(logementData => {
                const lg = logementData.find(l => l.id === id);
                if (!lg) {
                    navigate("/Error404");
                    return ;
                }
                setLogementEncours(lg);
            })
            .catch(error => console.log(error) )
    },[])

    if (!logementEnCours){
        return (
            <div>
                chargement en cours ...
            </div>
        )
    }

    const rating = parseInt(logementEnCours.rating);

    const stars = Array(5).fill(null).map((_, index) => (
        <FontAwesomeIcon
            key={index}
            icon={fasStar}
            className="star"
            style={{ color: index < rating ? "#FF6060" : "#E3E3E3" }}
        />
    ));

    return (
        <main className="container ContentLogement">
            <div>
                <Carrousel pictures={logementEnCours.pictures}/>
                <div className="InfosLogement">
                    <div>
                        <h2 className="titleLogement"> { logementEnCours.title } </h2>
                        <span> {logementEnCours.location} </span>
                        <div className="tagsLogement">
                            {logementEnCours.tags.map((tag, index) => (
                                <div key={index} className="TagLabel">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="profil">
                        <div className="hostLogement">
                            <h2 className="nameHost">{ logementEnCours.host.name }</h2>
                            <img className="pictureHost" src={ logementEnCours.host.picture } alt="host picture" />
                        </div>
                        <div className="starsRating">
                            {stars}
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">
                <Accordion className="" titre={"description"} contenu={logementEnCours.description}/>
                <Accordion className="" titre={"Service"} contenu={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
            </div>

        </main>
    );
}

export default Logement;

//logements { JSON.stringify(logementEnCours) }