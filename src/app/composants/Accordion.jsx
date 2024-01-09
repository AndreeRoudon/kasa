import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function Accordion(props) {
    const [open, setOpen] = useState(false);

    const toggleAccordion = () => {
        setOpen(!open);
    };
    return (
        <div className={`accordion ${open ? "open" : ""}`}>
            <div className="accordionHeader" onClick={toggleAccordion}>
                <span>{props.titre}</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`chevronIcon ${open ? "opening" : ""}`}
                />
            </div>
            {open && (
                <div className="accordionContainer">
                    {props.contenu}
                </div>
            )}
        </div>
    );
}

export default Accordion;