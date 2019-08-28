import React, { Component } from 'react'
import Rating from 'react-rating'


export default class FormAvis extends Component {

    state = {
        pseudo: "",
        note: 1,
        avisTitre: "",
        commentaire: ""
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
        
    }

    handleBodyChange = (e) => {
        this.setState({
            commentaire: e.target.value
        });
    }

    handleTitleChange = (e) => {
        this.setState({
            avisTitre: e.target.value
        });
    }
    handleRateChange = (e) => {
        this.setState({
            note: e.target.value
        });
    }
    handlePseudoChange = (e) => {
        this.setState({
            pseudo: e.target.value
        });
    }
        handleRatingChangenote = (rating)  => {
            this.setState({...this.state,  note: rating })
            }

    render() {
        return (
        <div className="container">
            <article 
            className= "col-md-8 offset-2" 
            id="formAvis" 
            style={{boxShadow: "-1px 0px 15px 10px rgba(244, 117, 142,.58)", marginTop:"100px" }}
            >
                <form 
                name="blog_post" 
                className="form-horizontal" 
                onSubmit={this.handleSubmit}
                >
                    <h2 style={{marginTop:'20px'}}>Postez votre avis </h2>
                        <div id="blog_post">
                            <div className="form-group">
                                <label className="col-sm-2 control-label  " htmlFor="blog_post_body">Pseudo</label>
                                <div className="col-sm-8 offset-2">
                                    <input  type="text"
                                    id="blog_post_body"
                                    placeholder="Pseudo..."
                                    value={this.state.pseudo}
                                    onChange={this.handlePseudoChange}
                                    className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label  " htmlFor="blog_post_body" >Note</label>
                                <div className="col-sm-8 offset-2">
                                    <Rating 
                                    name='note'
                                    initialRating={this.state.note}
                                    onChange = {this.handleRatingChangenote}
                                    emptySymbol={<i className="far fa-star" style={{fontSize: '30px'}}></i>}
                                    fullSymbol={<i className="fas fa-star" style={{fontSize: '30px'}}></i>}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label  " htmlFor="blog_post_body" >Titre</label>
                                <div className="col-sm-8 offset-2">
                                    <input  type="text"
                                            id="blog_post_body"
                                            placeholder="Titre..."
                                            value={this.state.title}
                                            onChange={this.handleTitleChange}
                                            className="form-control"/>
                                </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label  " htmlFor="blog_post_body" >Commentaire</label>
                    <div className="col-sm-8 offset-2">
                        <textarea  type="text"
                                id="blog_post_body"
                                placeholder="Commentaire..."
                                value={this.state.body}
                                onChange={this.handleBodyChange}
                                className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-12" style= {{paddingBottom: '20px'}}>
                        <button type="submit"
                                id="blog_post_submit"
                                className="btn-default btn">
                            Soumettre
                        </button>
                    </div>
                </div>
            </div>
        </form>
        </article>
        </div>
        )
    }
}
