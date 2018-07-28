import React, {Component} from 'react';

import envelop from '../imgs/envelop.png';

class ContactButton extends Component {
 

    render() {
        return(
            <button
                onClick = {this.props.handleContactUs}
                className = {(this.props.isClosed ?  'contactButton br ' : 'closed' )}
            >
               <img src = {envelop}  alt = 'envelop'/>
            </button>
        );
    }
}

export default ContactButton;