import React, {Component} from 'react';
import { Link, Redirect, withRouter} from 'react-router-dom';
import Slider from 'react-animated-slider';
import axios from 'axios';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';

class Carousel extends Component {

    state = {
                carouselResources: null,
                redirectHome: false
            };
        
        componentWillMount() {
            this.fetchCarouselResources();
        }
        
        
        fetchCarouselResources () {
                if(!this.state.carouselResources){
                    axios.get('http://127.0.0.1:8000/api/carousel').then(res => {
                            this.setState({carouselResources: res.data});
                        })  
                }
        }

        render() {
            if(this.state.redirectHome){
                return <Redirect push to={`/test`} />
            }
            return(
                <Slider autoplay={3000} className="slider-wrapper">
                {this.state.carouselResources &&
                this.state.carouselResources.slice(0, 5).map((data, index) =>
                <div key={index}
                    className="slider-content"
                    style={{ background: `url('http://localhost:8080/build/images/${data.img}') no-repeat center center` }}
                    >
                <div className="inner">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <Link className="btn btn-warning"to={data.link}>Découvrir</Link>
                    </div>
                    </div>
                )}
                

            </Slider>
        )
    }
}
export default withRouter(Carousel);
