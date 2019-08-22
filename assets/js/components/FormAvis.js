import React, { Component } from 'react'

export default class FormAvis extends Component {

    state = {
        pseudo: "",
        rate: "",
        body: "",
        title: ""
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        if( !this.state.pseudo.replace(/\s/g, '').length|| !this.state.rate.replace(/\s/g, '').length || !this.state.body.replace(/\s/g, '').length || !this.state.title.replace(/\s/g, '').length == ""){
            console.log('ca marche pas')
        }
        else{
            this.props.onSubmit(this.state);
        }
        
    }

    handleBodyChange = (e) => {
        this.setState({
            body: e.target.value
        });
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    handleRateChange = (e) => {
        this.setState({
            rate: e.target.value
        });
    }
    handlePseudoChange = (e) => {
        this.setState({
            pseudo: e.target.value
        });
    }

    render() {
        return (
            <form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
            <div id="blog_post">
            <div className="form-group">
                    <label className="col-sm-2 control-label  " htmlFor="blog_post_body">Pseudo</label>
                    <div className="col-sm-10">
                        <input  type="text"
                                id="blog_post_body"
                                placeholder="Pseudo..."
                                value={this.state.pseudo}
                                onChange={this.handlePseudoChange}
                                className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label  " htmlFor="blog_post_title">Note</label>
                    <div className="col-sm-10">
                        <input  type="text"
                                id="blog_post_title"
                                placeholder="Note..."
                                value={this.state.rate}
                                onChange={this.handleRateChange}
                                className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label  " htmlFor="blog_post_body" >Titre</label>
                    <div className="col-sm-10">
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
                    <div className="col-sm-10">
                        <input  type="text"
                                id="blog_post_body"
                                placeholder="Commentaire..."
                                value={this.state.body}
                                onChange={this.handleBodyChange}
                                className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <button type="submit"
                                id="blog_post_submit"
                                className="btn-default btn">
                            Soumettre
                        </button>
                    </div>
                </div>
            </div>
        </form>
        )
    }
}
