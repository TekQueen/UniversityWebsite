import React, {Component} from 'react';

class ContactButton extends Component {
 

    render() {
        return(
            <button
                onClick = {this.props.handleContactUs}
                className = {(this.props.isClosed ?  'contactButton br lieanerBackground' : 'closed' )}
            >
                &#9993;
            </button>
        );
    }
}

export default ContactButton;