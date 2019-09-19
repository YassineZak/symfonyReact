import React, { Component, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default class componentName extends Component {
    render() {
        return (
    <Fragment>
        <NavBar />
        <main className="mainReservation">
            <section className="presentation">
                <p>HÔTEL PARIMIS  ·  PARIS</p>
                <h1>Bienvenue au PARIMIS HOTEL PARIS</h1>
                <img src="http://localhost:8080/build/images/parimis_reception1.jpg" alt="parimis presentation"/>
                <article id="formulaire">
                    <form oninput="total.value = ((nights.valueAsNumber * chambre_classique.valueAsNumber * 100) + (nights.valueAsNumber * chambre_superieure.valueAsNumber * 300) + (nights.valueAsNumber * chambre_familiale.valueAsNumber * 700) + (nights.valueAsNumber * suite.valueAsNumber * 1200))+
                    ((guests.valueAsNumber - 1) * 10)">
                        <input type="submit" value="Soumettre" />
                    </form>
                </article>
            </section>
        </main>
        <Footer />
    </Fragment>
        )
    }
}
