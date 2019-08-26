import React, { Component, Fragment } from 'react'
import {Link, withRouter} from 'react-router-dom'

import axios from 'axios';

class WidgetBlock extends Component {

    state = {
        widgetBlockResources: null
    }

    componentWillMount(){
        this.fetchwidgetblockResources();
        console.log(this.state.widgetBlockResources);
        
    }

    fetchwidgetblockResources (){
        if(!this.state.widgetBlockResources){
            axios.get('http://127.0.0.1:8000/api/widgetblock').then(res => {
                    this.setState({widgetBlockResources: res.data});
                })  
        }
    }
    capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    render() {
        return (

        <Fragment>
            <section id="parimisRestoSpaActu" >
            {this.state.widgetBlockResources && this.state.widgetBlockResources.slice(0,3).map((data, index)=>
                <div className="actualite" key={index}>
                    <img src= {`http://localhost:8080/build/images/${data.img}`} alt="parimis_actualite"/>
                    <div className="effet_montant">
                        <div className="text_parimis_actualite">
                            <span>{this.capitalizeFirstLetter(data.block_title)}</span>
                            <p><Link className={"nav-link"} to={`/${data.link_url}`}>{data.link_title}</Link></p>
                        </div>
                    </div>
                </div>
            )}
            </section>
            {this.state.widgetBlockResources && this.state.widgetBlockResources.slice(3,4).map((data, index)=>
            <section id="parimis_suite" key={index}>
                <div className="parimis_suite">
                    <img src={`http://localhost:8080/build/images/${data.img}`} alt="parimis_suite" />
                    <div className="effetMontant">
                        <div className="textEffet">
                            <Link className={"nav-link"} to={`/${data.link_url}`}>{data.link_title}</Link>
                        </div>
                    </div>
                </div>
            </section>
            )}
        </Fragment>
        )
    }
}
export default withRouter(WidgetBlock);
