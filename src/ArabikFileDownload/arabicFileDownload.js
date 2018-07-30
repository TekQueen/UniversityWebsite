import React, {PureComponent} from 'react';

import arabicFile from './file/arabicFile.pdf';

class DownloadArabicFile extends PureComponent {
    state = {
        isOpen: true
    }

    close = () => {
        this.setState(
            prevState => ({ isOpen: !prevState.isOpen })
        );
    }

    render() {
        let {isOpen} = this.state;
        return (
            <section 
                className = { (
                    isOpen ? 'DAFContainer bs br animatedText'
                    :
                    'closeed'
                )}
                >
                <section 
                    className = 'closeArabicFile'
                    onClick = {this.close}
                >
                X
                </section>
                    
                    <a 
                        className = 'fileA'
                        href = {arabicFile} 
                        download
                    >
                    <p className = 'fileToBeDownloaded'>
                    تحميل الجامعة الأوروبية لأرمينيا المعلومات باللغة العربية
                    </p>
                    </a>
                    
            </section>
        )
    }
}

export default DownloadArabicFile;