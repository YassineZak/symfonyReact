import React, { Component } from 'react'

export default class FormAvis extends Component {

    state = {
        pseudo: "",
        note: "",
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
