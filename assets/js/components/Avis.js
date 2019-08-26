import React, { Component } from 'react';
import FormAvis from '../components/FormAvis';
import axios from 'axios';


export default class Avis extends Component {

    handleSubmit = (data)=> {
        console.log(data)
        this.avisPost(data)
    }

    avisPost = (data) => {
        console.log(data)
        axios.post(`http://127.0.0.1:8000/api/avis/post`, { data })
        .then(res => {
        console.log(res);
        console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <FormAvis onSubmit={this.handleSubmit}></FormAvis>
            </div>
        );
    }
}