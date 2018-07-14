import React, {Component} from 'react';

import DocumentsHeader from '../components/documentsheader';
import DocumentsAttention from '../components/documentsAttention';
import DocumentsMainPart from '../components/documentsmainpart';
import Line from '../components/line';

import {setDocumentItemClicked} from '../actions/actions';
import {connect} from 'react-redux';

import '../App.css';

const mapStateToProps = state => ({
    shouldShown: state.onDocumentItemClicked.shouldShown,
})

const mapDispatchToProps = dispatch => ({
    onDocumentItemClicked: (index) => dispatch(setDocumentItemClicked(index)),
})

class Documents extends Component {

    render() {
        const {shouldShown, onDocumentItemClicked} = this.props;

        return (
                <section className = 'br bs animatedText'>

                      <DocumentsHeader
                            itemClicked = {onDocumentItemClicked}
                            documentItems = {[ 
                                'مقطع  دکترا',                              
                                'کارشناسی ارشد',
                                'پیش دانشگاهی وکارشناسی',                   
                                'زبان المانی',

                            ]} 
                        />
                        <section className = 'line innerLine'>
                            <Line />
                        </section>
                    
                    <section className = 'documentsWhiteSpace'>

                        <DocumentsMainPart
                            itemToBeShown = {shouldShown} 
                        />

                        <DocumentsAttention />
                    </section>                                
                </section>             
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
