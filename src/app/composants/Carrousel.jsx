import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function Carrousel({pictures}) {
    const [index, setIndex] = useState(0);
    function nextPicture(){
        if (index < pictures.length - 1) {
            setIndex(index + 1);
            return ;
        }
        setIndex(0);
    }

    function previousPicture(){
        if (index > 0) {
            setIndex(index - 1);
            return ;
        }
        setIndex(pictures.length - 1);
    }

    return (
        <div className="carrousel">
            { pictures.length > 1 ?
                <FontAwesomeIcon onClick={previousPicture} icon={faChevronLeft} className="chevronLeft"/>
                : null
            }
            <img src={pictures[index]} alt="photo du logement" className="img-carrousel"/>
            { pictures.length > 1 ?
                <>
                    <div className="count-carrousel">
                        {index + 1} / {pictures.length}
                    </div>
                    <FontAwesomeIcon onClick={nextPicture} icon={faChevronRight} className="chevronRight"/>
                </>
                : null
            }

        </div>
    );
}

export default Carrousel;