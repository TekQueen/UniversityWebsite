import React, {PureComponent} from 'react';

import MajorSection from '../../majors/components/majorSection';
import Info from './info';

class TutionAndDeadline extends PureComponent {
    render() {
        const {header, infoDetails} = this.props;
        return (
            <section className = 'animatedText'>
                <header>
                    <p className = 'documentsContentH1'>
                        {header}
                    </p>
                </header>

            {
                infoDetails.map(
                    (element, index) => 
                        <MajorSection 
                            major = {element[0].infoHeader}
                            key = {index}
                        >
                            <Info
                                inforContentes = {element[1]}
                            />  
                        </MajorSection>
                )
            }
         </section>
        );
    }
}  

export default TutionAndDeadline;