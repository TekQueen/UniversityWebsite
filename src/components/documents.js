import React, {Component} from 'react';

import DocumentsHeader from './documentsheader';
import DocumentsAttention from './documentsAttention';
import DocumentsMainPart from './documentsmainpart';
import Line from './line';

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
                return {shouldShown: arr}
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
                                'پیش دانشگاهی و دوره زبان',
                                'مقطع کارشناسی',
                                'کارشناسی ارشد',
                                'مقطع  دکترا',
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
