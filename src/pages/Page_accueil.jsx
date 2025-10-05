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
        <section id="services" class="section">
            <div class="container">
                <h2 class="section-title">Nos services</h2>
                <div className="container-card">
                    
                    <article class="card">
                        <h3>Conception</h3>
                        <p>Ateliers cadrage, maquettes sobres et centrées utilisateur.</p>
                    </article>
                    <article class="card">
                        <h3>Développement</h3>
                        <p>HTML/CSS/JS propres et personnalisables.</p>
                    </article>
                    <article class="card">
                        <h3>Maintenance</h3>
                        <p>Mises à jour de contenu, optimisation continue et support.</p>
                    </article>
                </div>
                
            </div>
        </section>
    </>
}

export default Accueil;