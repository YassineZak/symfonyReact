import React, { Fragment } from "react";
import NavBar from "../components/NavBar";

const Spa = () => {
        return (
            <Fragment>
        <NavBar />
        <main className="mainSpa">
            <section className="presentation">
            <img src="http://localhost:8080/build/images/parimisspa.jpg" alt="parimis restaurant" />
            <p>HÔTEL PARIMIS · PARIS</p>
            <h1>Un oasis de tranquillité</h1>
            <article>
                <p>
                Le Spa du PARIMIS Hôtel, un havre de paix loin de l'agitation
                parisienne. Évadez-vous dans notre spa de luxe dédié à votre
                bien-être. Détendez-vous grâce à nos soins revitalisants ou
                massages apaisants, pour ainsi nourrir votre esprit, corps et âme.
                </p>
                <p>
                Le parcours se poursuit dans notre centre de remise en forme et de
                relaxation, libre d’accès aux clients de l'hôtel. Découvrez le mur
                orné de coquillages, la piscine intérieure et le hammam, et vivez
                un moment de sérénité et de lâcher-prise. Un centre de remise en
                forme est également à votre disposition avec des équipements hauts
                de gamme ainsi que la possibilité de travailler avec un coach
                particulier pour vous aider à atteindre vos objectifs.{" "}
                </p>
            </article>
            </section>
            <section id="ancre">
            <article>
                <h2>Détente et Soins</h2>
                <p>
                <img
                    className="detenteetsoins"
                    src="http://localhost:8080/build/images/soins1.jpg"
                    alt="PARIMIS detente soins"
                />
                </p>
                <h3>Modelage & soins</h3>
                <div className="items">
                <div>
                    <h4>Soin Détente</h4>
                    <span>
                    Hammam Arômes et Couleurs ou Bain Japonais d’Arômes et de
                    Fleurs, Gommage Sublime au Monoï de Tahiti, et Massage Sublime
                    de Polynésie Délassant
                    </span>
                    <div className="duree">1h50</div>
                </div>
                <div>
                    <h4>Soin Decouverte« Ko Bi Do »</h4>
                    <span>
                    Hammam Arômes et Couleurs ou Bain Japonais d’Arômes et de
                    Fleurs, Massage Délassant du Dos, Soin-Massage et Jeunesse du
                    Visage « Ko Bi Do » Liftant et Repulpant
                    </span>
                    <div className="duree">2H20</div>
                </div>
                </div>
                <div className="items">
                <div>
                    <h4>Soin Relaxant</h4>
                    <span>
                    (pour deux personnes, en salle double) Hammam Arômes et
                    Couleurs, Gommage aromatique Energisant aux Epices, et Massage
                    Ayurvédique Indien Tonifiant ou Massage Taoïste Revitalisant
                    </span>
                    <div className="duree">1h50</div>
                </div>
                <div>
                    <h4>Soin Plaisir</h4>
                    <span>
                    Gommage Purifiant au Savon Noir Beldi, Enveloppement Purifiant
                    et Détoxifiant à la «Crème de Rassoul» dans le Hammam, et
                    Massage Oriental Traditionnel Relaxant
                    </span>
                    <div className="duree">1H15€</div>
                </div>
                <div>
                    <h4>Soin Evasion</h4>
                    <span>
                    Hammam Arômes et Couleurs ou Bain Japonais d’Arômes et de
                    Fleurs, Gommage aromatique Energisant aux Epices, Massage
                    Ayurvédique Indien Tonifiant, Soin-Massage du Visage Jeunesse
                    et Eclat « Taoïste », Massage énergétique des pieds
                    </span>
                    <div className="duree">3H</div>
                </div>
                </div>

                <p>
                <a href="parimis_reservation.html">Réservez</a>
                </p>
            </article>
            </section>
        </main>
        </Fragment>
    );
};

export default Spa;
