import Accordion from "../composants/Accordion.jsx";
import imgAbout from "../../assets/img-about.jpg"

function About() {
    return (
        <main className="container">
            <div className="bannerAbout">
                <img src={imgAbout} alt="fond montagne" className="headingImg"/>
            </div>
            <div className="listAccordion">
                <Accordion titre={"Fiabilité"} contenu={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
                <Accordion titre={"Respect"} contenu={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
                <Accordion titre={"Service"} contenu={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
                <Accordion titre={"Securité"} contenu={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
            </div>
        </main>
    );
}

export default About;