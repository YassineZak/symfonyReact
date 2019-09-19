import React, { Component, Fragment } from 'react'
import FormAvis from '../components/FormAvis'
import NavBar from '../components/NavBar'
import PostedAvis from '../components/PostedAvis'
import Footer from '../components/Footer'
import { goToAnchor } from 'react-scrollable-anchor'


export default class Avis extends Component {

    state = {
        formSubmit: false,
        avisResources: null,
        count: 0
    }

    handleSubmit = (data)=> {
        this.avisPost(data)
    }
    

    avisPost = (data) => {
        fetch('http://127.0.0.1:8000/api/avis/post', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        })
        .then(res => {
        this.setState({
            formSubmit: true,
            count: this.state.count + 1 
        })
        goToAnchor('AvisClient')
        })
        .catch(err => err);
    }

    render() {
            return (
                <Fragment>
                    <NavBar/>
                    <main className="avisMain">
                        <section id="ancre">
                            HÔTEL PARIMIS  ·  PARIS
                            <p>
                                <img className="avisparimis" src="http://localhost:8080/build/images/parimis_avis2.jpg" alt="PARIMIS avis"/>
                            </p>
                            <PostedAvis count={this.state.count}/>
                            {this.state.formSubmit? null : <FormAvis onSubmit={this.handleSubmit}></FormAvis> }
                        </section>
                    </main>
                    <Footer />
                </Fragment>
            );
    }
}