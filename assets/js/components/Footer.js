import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className="contacts">
            <p>Hôtel PARIMIS resort <br/>
            1 Avenue Montaigne <br/>
            75008 Paris.
            </p>
            <p><i className="fa fa-phone" aria-hidden="true"></i> +33 (0)1 35 35 35 35 <br/>
            <i className="fa fa-fax" aria-hidden="true"></i> +33 (0)1 35 35 35 35 </p>
            <p>reservation@hotel-parimis.com</p>
            <p><i className="fa fa-copyright" aria-hidden="true"></i> 2017 PARIMIS. TOUS DROITS RÉSERVÉS.</p>
        </div>
        <div className="navigationfooter">
            <h2>PARIMIS HOTEL</h2>
            <ul className="footerul">
            <li><a href="html/parimis_presentation.html#acces">Accés</a></li>
            <li><a href="html/parimis_recrutement.html">Recrutement</a></li>
            <li><a href="html/parimis_contact.html">Contact</a></li>
            <li><a href="html/parimis_evenementiel.html">Evénements</a></li>
            </ul>
            </div>
        <div className="architecture">
            <ul>
                <li><a href="html/parimis_mention_legale.html">Mentions légales</a></li>
                <li><a href="html/parimis_CGV.html">Conditions générales de vente</a></li>
                <li><a href="html/plan_du_site.html">Plan du site</a></li>
                <li>Inscrivez vous à notre newsletter</li>
            </ul>
            <p><i className="fa fa-facebook-official" aria-hidden="true"></i><i className="fa fa-twitter" aria-hidden="true"></i><i className="fa fa-tripadvisor" aria-hidden="true"></i><i className="fa fa-google-plus" aria-hidden="true"></i></p>
        </div>
    </footer>
    );
};

export default Footer;