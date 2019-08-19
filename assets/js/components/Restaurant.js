    import React, {Fragment} from "react";
    import NavBar from '../components/NavBar'
    const Restaurant = () => {
        return (
            <Fragment>
            <NavBar />
            <main className="mainRestaurant">
        <section className="presentation">
            HÔTEL PARIMIS  ·  PARIS
            <h1>Place à la gastronomie étoilée</h1>
            <article>
            <p>
                Situé au sein de l'hôtel, notre restaurant Le Parimis est un restaurant à part entière, qui jouit d'un cadre unique, en plein coeur de Paris. Il présente au sol une mosaïque d'origine datant de 1909 et un bar en acajou restauré pour offrir à ses clients l'ambiance traditionnelle parisienne du début du siècle.</p>
            <p>Notre carte mettant en avant des produits locaux ne manquera pas de ravir vos papilles. Des huîtres de première fraîcheur, de délicieux poissons et fruits de mer et des plats traditionnels classNameiques sont servis dans l'ambiance chaleureuse du restaurant. Dans la salle principale, entièrement re-décorée, vous pourrez déguster une cuisine de qualité basée essentiellement sur des produits frais et de saison.</p>

            </article>
        </section>
        <section id="ancre">
            <article>
            <h2>Carte et menus</h2>
            <p>
                <img className="carteEtMenu" src="http://localhost:8080/build/images/carteimage1.jpg" alt="PARIMIS chambre classique"/></p>
                <h3>Les Entrées</h3>
                <div className="items">
                <div>
                    <h3>Carte Brasserie (à partir de midi)</h3>
                    <h4>JARDIN MARIN IODÉ POUR ACCOMPAGNER</h4>
                    <span>la pièce de foie gras au pressé de caviar</span>
                    <div className="prix">90€</div>
                </div>
                <div>
                    <h4>LIÈVRE DE LA BEAUCE EN CROÛTE</h4>
                    <span>nappé de son consommé en gelée</span>
                    <div className="prix">85€</div>
                </div>
                </div>
                <div className="items">
                <div>
                    <h3>Carte Dégustation (à partir de 16h)</h3>
                    <h4>GRATINÉE D’OIGNONS</h4>
                    <span>à la parisienne / contemporaine</span>
                    <div className="prix">70€</div>
                </div>
                <div>
                    <h3>Carte Restaurant (à partir de 19h)</h3>
                    <h4>LANGOUSTINES BRETONNES RAIDIES</h4>
                    <span>mayonnaise tiède, galettes de sarrasin croquantes</span>
                    <div className="prix">140€</div>
                </div>
                <div>
                    <h4>SAINT-JACQUES À CRU / EXTRAIT DE LITCHI</h4>
                    <span>tarama givré d’oursins de roche</span>
                    <div className="prix">92€</div>
                </div>
                </div>

                <p><a href="parimis_reservation.html">Réservez</a></p>

            </article>
            <article>
            <p>
                <img className="carteEtMenu" src="http://localhost:8080/build/images/carteimage2.jpg" alt="PARIMIS chambre superieure"/></p>
                <h3>LES VIANDES & VOLAILLES</h3>
                <div className="items">
                <div>
                    <h3>Carte Brasserie (à partir de midi)</h3>
                    <h4>CÔTES DE CHEVREUIL AU CHARBON DE BOIS</h4>
                    <span>loukoum au raifort / moutarde</span>
                    <div className="prix">130€</div>
                </div>
                <div>
                    <h4>GROUSE D’ECOSSE FAÇON « À LA ROYALE »</h4>
                    <span>pâtes à la châtaigne / fruits d’automne</span>
                    <div className="prix">98€</div>
                </div>
                </div>
                <div className="items">
                <div>
                    <h3>Carte Dégustation (à partir de 16h)</h3>
                    <h4>GRATINÉE D’OIGNONS</h4>
                    <span>à la parisienne / contemporaine</span>
                    <div className="prix">70€</div>
                </div>
                <div>
                    <h3>Carte Restaurant (à partir de 19h)</h3>
                    <h4>PIGEON LAQUÉ ET SES ABATTIS</h4>
                    <span>eau de schweppes / tagliatelles de navet à cru</span>
                    <div className="prix">95€</div>
                </div>
                <div>
                    <h4>NOIX DE RIS DE VEAU GRATINÉE</h4>
                    <span>oseille / épinard, jus d’herbes</span>
                    <div className="prix">120€</div>
                </div>
                <div>
                    <h4>LES SALADES DE SAISON MÉLANGÉES</h4>
                    <span>vinaigrette au jus de truffe</span>
                    <div className="prix">24€</div>
                </div>
                <div>
                    <h4>LES FROMAGES DE TERROIRS</h4>
                    <span>frais et affinés</span>
                    <div className="prix">38€</div>
                </div>
                </div>
                <p><a href="parimis_reservation.html">Réservez</a></p>
            </article>
            <article>
            <p>
                <img className="carteEtMenu" src="http://localhost:8080/build/images/carteimage3.jpg" alt="PARIMIS carte restaurant"/></p>
                <h3>LES POISSONS & CRUSTACÉS</h3>
                <div className="items">
                <div>
                    <h3>Carte Brasserie (à partir de midi)</h3>
                    <h4>ROUGET EN ÉCAILLE</h4>
                    <span>raviole de fenouil à cru au parfum d’orange</span>
                    <div className="prix">98€</div>
                </div>
                <div>
                    <h3>Carte Dégustation (à partir de 16h)</h3>
                    <h4>TRONÇON DE TURBOT À LA PLANCHA</h4>
                    <span>macération de cresson / poire vinaigrée</span>
                    <div className="prix">138€</div>
                </div>
                </div>
                <div className="items">
                <div>
                    <h3>Carte Restaurant (à partir de 19h)</h3>
                    <h4>BAR DE LIGNE</h4>
                    <span>caviar / lait ribot de mon enfance</span>
                    <div className="prix">135€</div>
                </div>
                <div>
                    <h4>ANGUILLE DE LA SOMME À PEINE FUMÉE</h4>
                    <span>pain brulé / réduction de jus de raisin</span>
                    <div className="prix">85€</div>
                </div>
                <p><a className="lien" href="parimis_reservation.html">Réservez</a></p>
                </div>
            </article>
            <article>
            <p>
                <img className="carteEtMenu" src="http://localhost:8080/build/images/carteimage4.jpg" alt="PARIMIS chambre superieure"/></p>
                <h3>LES DESSERTS</h3>
                <div className="items">
                <div>
                    <h3>Carte Brasserie (à partir de midi)</h3>
                    <h4>TRANSPARENCE DE BANANE</h4>
                    <span>émulsion de fruit de la passion / café</span>
                    <div className="prix">39€</div>
                </div>
                <div>
                    <h3>Carte Dégustation (à partir de 16h)</h3>
                    <h4>AIRELLES À LA PULPE DE VÉGÉTAL RAFRAÎCHIE</h4>
                    <span>cheese cake meringué</span>
                    <div className="prix">40€</div>
                </div>
                </div>
                <div className="items">
                <div>
                    <h3>Carte Brasserie (à partir de 19h)</h3>
                    <h4>CROQUANT DE PAMPLEMOUSSE</h4>
                    <span>confit et cru</span>
                    <div className="prix">38€</div>
                </div>
                <div>
                    <h4>ECORCE DE CHOCOLAT NOIR</h4>
                    <span>torréfié de cacahuète / onctueux de Carambar</span>
                    <div className="prix">38€</div>
                </div>
                </div>
                <p><a href="parimis_reservation.html">Réservez</a></p>
            </article>
        </section>
        </main>
            </Fragment>
        );
    };

    export default Restaurant;