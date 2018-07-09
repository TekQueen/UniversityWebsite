import React, {Component} from 'react';

import DocumentsHeader from '../components/documentsheader';
import DocumentsAttention from '../components/documentsAttention';
import DocumentsMainPart from '../components/documentsmainpart';
import Line from '../components/line';

import {setDocumentItemClicked} from '../actions/actions';
import {connect} from 'react-redux';

import '../App.css';

const mapStateToProps = state => ({
    shouldShown: state.shouldShown,
})

const mapDispatchToProps = dispatch => ({
    onDocumentItemClicked: (index) => dispatch(setDocumentItemClicked(index)),
})

class Documents extends Component {

    render() {
        const {shouldShown, onDocumentItemClicked} = this.props;

        return (
            <div>
                <div className = 'br bs'>

                      <DocumentsHeader
                            itemClicked = {onDocumentItemClicked}
                            documentItems = {[ 
                                'مقطع  دکترا',                              
                                'کارشناسی ارشد',
                                'پیش دانشگاهی وکارشناسی',                   
                                'زبان المانی',

                            ]} 
                        />
                        <div className = 'line innerLine'>
                            <Line />
                        </div>
                    
                    <div className = 'documentsWhiteSpace'>

                        <DocumentsMainPart
                            itemToBeShown = {shouldShown} 
                        />

                        <DocumentsAttention />
                    </div>                                
                </div>             
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
