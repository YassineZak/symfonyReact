    import React, { Component, Fragment } from 'react'
    export default class PostedAvis extends Component {
        state = {
            avisResources: null
        }
        async componentDidMount(){
                this.fetchAvisResources()
        }
        componentDidUpdate(){
                this.fetchAvisResources()
        }
        fetchAvisResources(){
                    fetch('http://127.0.0.1:8000/api/avis')
                    .then(response => response.json())
                    .then(data => this.setState({avisResources: data}))
                    .catch(err => err);    
        }
        render() {
            return (
                <Fragment>
                <h2 id="AvisClient">Avis de la clientéle</h2>
                {this.state.avisResources && this.state.avisResources.sort((a, b) => b.id - a.id).slice(0,5).map((data, index)=> 
                    <article id="avis1" key={index}>
                    <h3>{data.pseudo}<i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i></h3>
                    <div className="items">
                    <div>
                    <h4>{data.avisTitre}</h4>
                    <p className="avis1">{data.commentaire}</p>
                    </div>
                    </div>
                    </article>
                )}
                <p className="reservez"><a href="parimis_reservation.html">Réservez</a></p>
                </Fragment>
            )
        }
    }
