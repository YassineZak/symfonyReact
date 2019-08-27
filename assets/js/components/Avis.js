import React, { Component } from 'react';
import FormAvis from '../components/FormAvis';


export default class Avis extends Component {

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
        }).then(res => {
        console.log(res);
        }).catch(err => err);
    }

    render() {
        return (
            <div>
                <FormAvis onSubmit={this.handleSubmit}></FormAvis>
            </div>
        );
    }
}