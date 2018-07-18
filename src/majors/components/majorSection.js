import React, {Component, Fragment} from 'react';

class MajorSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            panelShowed: false
        }
    }

    handleClick = () => {
        this.setState(
            prevState => ({
                panelShowed: !prevState.panelShowed
            })
        );
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

export default MajorSection;

