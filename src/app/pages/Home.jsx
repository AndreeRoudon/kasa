//import logements from "../../public/data.json";
import CardLogement from "../composants/CardLogement.jsx";
import {useState, useEffect} from "react";

function Home() {
    const [logements, setLogements] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setLogements(data))
            .catch(error => console.log(error))
    },[])

    // chargement
    if (logements.length === 0){
        return (
            <div>
                chargement en cours ...
            </div>
        )
    }

    return (<>
            <div className="banner container">
                <span>Chez vous, partout et ailleurs</span>
                <div className={"background"}></div>
            </div>
            <main className="container CardsAll">
                {logements.map(l => <CardLogement key={l.id} logementID={l.id}
                                                  title={l.title} cover={l.cover}/>
                )}
            </main>
        </>
    )
}

export default Home
