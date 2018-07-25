import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';

class DocumentsHeader extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        const {documentItems, itemClicked} = this.props;
        return (
            <nav className = 'documentItemsMenue'>
                {
                    documentItems.map(
                        (element, index) => 
                            <Fragment
                                key = {index}                            
                            >
                                <section
                                    onClick = {() => itemClicked(index)}
                                    className = 'documentItems'
                                >
                                    {element}
                                </section>
                            </Fragment>
                    )
                }
            </nav>
        );
    }
}
       
DocumentsHeader.propTypes = {
    documentItems: PropTypes.array,
    itemClicked: PropTypes.func
}
export default DocumentsHeader;