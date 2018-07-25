import React, {Component} from 'react';

import ListOfThings from '../../components/listofthings';

import {documentsAttention, attention, note} from '../../languagesFile/persian';

class DocumentsAttention extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <section className = 'documentsAttentionWhiteSpace'>
                <br />
                <header>
                    <h2>{note}</h2>
                </header>
                <ListOfThings
                    listofthings = {documentsAttention} 
                />
                <p className = 'attention'>
                    {attention} 
                </p>
   
                <br />
            </section>
        )
    }
}

export default DocumentsAttention;