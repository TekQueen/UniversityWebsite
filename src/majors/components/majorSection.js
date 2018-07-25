import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class MajorSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            panelShowed: false
        }
    }
    
    handleClick = () => {
        function updateState() {
            return prevState => ({
                panelShowed: !prevState.panelShowed
            })
        }

        this.setState(updateState());
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.panelShowed !== nextState) {
            return true;
        }
        return false;
    }

    render() {
        let {panelShowed} = this.state;

        return (
            <Fragment>

                <button 
                    className = {
                        panelShowed ?  'accordion br accordionClicked' : 'accordion br'
                    }
                    onClick = {this.handleClick}
                >{this.props.major}</button>
                {
                    (
                        panelShowed ? 
                        <section className = 'panel'>
                            {this.props.children}
                        </section>
                        : 
                        null
                    )
                }
            </Fragment>
        )
    }
}

MajorSection.porpTypes = {
    props: PropTypes.string
}

export default MajorSection;


