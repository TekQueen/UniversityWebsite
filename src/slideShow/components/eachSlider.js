import React, {Fragment} from 'react';

import SliderDots from './sliderDots';

const EachSlider = props => (
    <Fragment>
        {props.children}
        <SliderDots handleSlider = {props.handleSlider} />
    </Fragment>
)

export default EachSlider;