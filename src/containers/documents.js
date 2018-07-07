import React, {Component} from 'react';

import DocumentsHeader from '../components/documentsheader';
import DocumentsAttention from '../components/documentsAttention';
import DocumentsMainPart from '../components/documentsmainpart';
import Line from '../components/line';

import '../App.css';

class Documents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shouldShown: [0, 0, 0, 0]
        }

        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked(index) {

        let arr = [0, 0, 0, 0];
        arr[index] = 1;

        this.setState(
            (prevState) => {  
            
                for ( let i = 0; i < arr.length; i++) {
                    if (arr[i] !== prevState.shouldShown[i]) {
                        return {
                            shouldShown: arr,
                        }
                    }  
                        
                }
                return {
                    shouldShown: [0, 0, 0, 0]
                }
            }     
        );
    }
            

    render() {
        return (
            <div>
                <div className = 'br bs'>

                      <DocumentsHeader
                            itemClicked = {this.itemClicked}
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
                            itemToBeShown = {this.state.shouldShown} 
                        />

                        <DocumentsAttention />
                    </div>                                
                </div>             
            </div>
        );
    }
}

export default Documents;
