import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

import AboutUs from './aboutus';
import SlideShow from '../../slideShow/containers/slideshow';
import ContactUs from '../../contactUs/containers/contactUs';
import DownloadArabicFile from '../../ArabikFileDownload/components/arabicFileDownload';

class HomePage extends PureComponent {
    render() {
        const {
            aboutusHeader,
            longTexes,
            listOfThingsBox,
            downloadArabicFileTitle
        } = this.props;
        return (
            <Fragment>
                <DownloadArabicFile 
                    downloadArabicFileTitle = {downloadArabicFileTitle}
                />  
                <SlideShow />     
                <AboutUs 
                    aboutusHeader = {aboutusHeader}
                    longTexes = {longTexes}
                    listOfThingsBox = {listOfThingsBox}
                />
                <ContactUs />
            </Fragment>
        )
    }
}

HomePage.protoTypes = {
    aboutusHeader: PropTypes.string,
    longTexes: PropTypes.array,
    listOfThingsBox: PropTypes.array
}

export default HomePage;