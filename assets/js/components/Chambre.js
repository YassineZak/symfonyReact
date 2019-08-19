import React, {Fragment} from "react";
import NavBar from '../components/NavBar'
require('../../css/parimis/style_chambres.css')

const Chambre = () => {
  return (
        <Fragment>
        <NavBar />
        <main className="mainChambre">
        <section className="presentation">
            HÔTEL PARIMIS · PARIS
            <h1>90 Chambres & Suites lumineuses</h1>
            <article>
            <p>
                Le boutique hôtel compte 90 chambres lumineuses, dont quelques-unes,
                les chambres supérieures au septième et dernier étage, offrent une
                vue sur les toits de Paris, la Tour Eiffel ou le Panthéon. Côté
                déco, lampes patinées, armoires en « chapeau de gendarme » et tissus
                aux coloris chatoyants créent une atmosphère à la fois cosy et
                épurée.
            </p>
            <p>
                Pour un confort absolu et une détente garantie. Ajoutons à cela des
                salles de bains équipées de douche ou de baignoire et des produits
                d’accueil 100% naturels.
            </p>
            </article>
        </section>
        <section id="ancre">
            <article>
            <h2>Chambres classiques</h2>
            <p>
                <img
                className="chambre_classique"
                src="http://localhost:8080/build/images/parimis_chambre_classique.jpg"
                alt="PARIMIS chambre classique"
                />
            </p>
            <p>
                La Chambre Classique, dans ses tons pastel, est tel un nid douillet
                où il fait bon se détendre. Malgré sa petite superficie, faisant
                également son cachet, elle est dotée d’un grand lit double (150 x
                190cm) et elle est équipée de la télévision à écran plat, du
                téléphone, de tables de chevet, de la climatisation et d’un accès
                internet sans fil illimité et gratuit. Sa salle de bains avec douche
                est appréciée pour sa fonctionnalité et son équipement.
            </p>
            <p>Prix par nuitée : 100€</p>
            <p>
                <a href="parimis_reservation.html">Réservez</a>
            </p>
            </article>
            <article>
            <h2>Chambres Confort</h2>
            <p>
                <img
                className="chambre_superieure"
                src="http://localhost:8080/build/images/parimis_chambre_superieur.jpg"
                alt="PARIMIS chambre superieure"
                />
            </p>
            <p>
                Nos Chambres Conforts se trouvent au septième et dernier étage de
                l’hôtel. Toutes sont dotées de vues uniques sur les toits de Paris,
                et l’une d’entre-elles bénéficie de la vue sur la Tour Eiffel. Leur
                décoration de style "contemporain-colonial" a été retenue par de
                multiples guides et magazines internationaux depuis leur création.
                La salle de bains, très lumineuse, est équipée de baignoire, une ou
                deux vasques, miroirs, sèche-cheveux, coiffeuse vous invitant à la
                relaxation.
            </p>
            <p>Prix par nuitée : 300€</p>
            <p>
                <a href="parimis_reservation.html">Réservez</a>
            </p>
            </article>
            <article>
            <h2>Chambres Deluxe</h2>
            <p>
                <img
                className="chambre_familiale"
                src="http://localhost:8080/build/images/parimis_chambre_familiale.jpg"
                alt="PARIMIS chambre familiale"
                />
            </p>
            <p>
                La Chambre Deluxe se compose de deux Chambres Classiques
                communicantes ou d'une chambre pour 3 personnes. Elle dispose d’un
                lit double et/ou de lits jumeaux. Climatisée, elle est équipée d’un
                écran plat, d’un bureau, de tables de chevet, de connexion Wifi et
                du téléphone. La salle de bains dispose de baignoire ou douche et
                d’un sèche-cheveux.
            </p>
            <p>Prix par nuitée : 700€</p>
            <p>
                <a href="parimis_reservation.html">Réservez</a>
            </p>
            </article>
            <article>
            <h2>Nos suites</h2>
            <p>
                <img
                className="suites"
                src="http://localhost:8080/build/images/parimis_suite_categorique.jpg"
                alt="PARIMIS suite"
                />
            </p>
            <p>
                les suites Deluxe sont très vastes et offrent une vue dégagée sur le
                parc ou sur la ville. Chaque suite Deluxe est pourvue d’une chambre
                avec deux lits jumeaux en 90 et d’un placard de rangement, d’un
                séjour meublé d’un canapé convertible 160, d’un fauteuil, d’un
                bureau ergonomique, d’une chaise, d’un accès gratuit à Internet,
                d’un placard de rangement, d’un coin cuisine équipée avec coin
                repas. Le salon et la chambre disposent chacun d’une télévision à
                écran plat La salle de bain bénéficie d’une douche à l’italienne et
                de toilettes. Certaines suites bénéficient en plus d’une baignoire.
            </p>
            <p>Prix par nuitée : 1200€</p>
            <p>
                <a href="parimis_reservation.html">Réservez</a>
            </p>
            </article>
        </section>
        </main>
        </Fragment>
    );
};

export default Chambre;
