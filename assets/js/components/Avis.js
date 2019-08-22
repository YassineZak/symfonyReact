import React, { Component } from 'react';
import FormAvis from '../components/FormAvis';

export default class Avis extends Component {

    handleSubmit = (data)=> {
        console.log('form submission data', data)
    }

    render() {
        return (
            <div>
                <FormAvis onSubmit={this.handleSubmit}></FormAvis>
            </div>
        );
    }
}