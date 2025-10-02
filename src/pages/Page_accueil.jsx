import { Link } from "react-router-dom";


function Accueil() {
    return <>
        <section id="main_content">
            <div id="container_content">
                <h1>Des sites vitrines utiles et rapides.</h1>
                <p>Dans le respect de votre charte graphque</p>
                <div className="container_button">
                    <Link className="button_main" id="button_write">Nous écrire</Link>
                    <Link className="button_main" id="button_exemple">Voir des exemples</Link>
                </div>
            </div>
        </section>
    </>
}

export default Accueil;