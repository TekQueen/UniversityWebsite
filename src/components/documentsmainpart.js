import React from 'react';
import PropTypes from 'prop-types';

import ListOfThings from './listofthings';
import Line from './line';

import '../App.css';

const DocumentsMainPart = ({itemToBeShown }) => 
        <div>
            {( itemToBeShown.map ((element, index) => {
                if ( index === 0 && element === 1) {
                    return ( 
                        <div>
                            <h3 className = 'documentsH'>مدارک مورو نیاز برای ثبت نام در دوره پیش دانشگاهی و دوره زبان</h3>
                            <ListOfThings 
                                isBlue = {true}
                                listofthings = {[
                                    '* کلاس دوازدهم * دیپلم، سوم دبیرستان قدیم مدرک نهایی',
                                    '* ریز نمرات کلاس دوازدهم * دیپلم، سوم دبیرستان قدیم مدرک نهایی',
                                    'شناسنامه',
                                    '* قطعه عکس سه در چهار * رنگی مات',
                                    'ترجمه پاسپورت به زبان ارمنی',
                                    'گواهی سلامت از ارمنستان'
                                ]}
                            />
                            <div className = 'line innerLine'>
                                <Line />
                            </div>
                        </div>
                    );
                    } else if (index === 1 && element === 1) {
                        return (
                            <div>
                                <h3 className = 'documentsH'>مدارک مورد نیاز برای ثبت نام در مقطع کارشناسی</h3>
                            <ListOfThings
                                isBlue = {true} 
                                listofthings = {[
                                    '* کلاس دوازدهم * دیپلم، سوم دبیرستان قدیم مدرک نهایی',
                                    '* ریز نمرات کلاس دوازدهم * دیپلم، سوم دبیرستان قدیم مدرک نهایی',
                                    'شناسنامه',
                                    '* قطعه عکس سه در چهار * رنگی مات',
                                    'ترجمه پاسپورت به زبان ارمنی',
                                    'گواهی سلامت از ارمنستان'
                                ]}
                            />
                            <div className = 'line innerLine'>
                                <Line />
                            </div>
                            </div>
                        );
                    } else if (index === 2 && element === 1) {
                        return (
                            <div>
                                <h3 className = 'documentsH'>مدارک مورد نیاز برای ثبت نام در مقطع  کارشناسی ارشد</h3>
                                <ListOfThings
                                    isBlue = {true} 
                                    listofthings = {[
                                        'مدرک کارشناسی',
                                        'ریز نمرات کارشناسی',
                                        'شناسنامه',
                                        '* قطعه عکس سه در چهار * رنگی مات',
                                        'ترجمه پاسپورت به زبان ارمنی',
                                        'گواهی سلامت از ارمنستان'
                                    ]}
                                />
                                <div className = 'line innerLine'>
                                    <Line />
                                </div>
                            </div> 
                        );
                    } else if (index === 3 && element === 1) {
                        return(
                            <div>
                                    <h3 className = 'documentsH'>مدارک مورد نیاز برای ثبت نام در مقطع  دکترا </h3>
                                    <ListOfThings
                                        isBlue = {true} 
                                        listofthings = {[
                                            'مدرک کارشناسی وکارشناسی ارشد',
                                            'ریز نمرات کارشناسی وکارشناسی ارشد',
                                            'شناسنامه',
                                            '* قطعه عکس سه در چهار * رنگی مات',
                                            'ترجمه پاسپورت به زبان ارمنی',
                                            'گواهی سلامت از ارمنستان'
                                        ]}
                                    />
                                    <div className = 'line innerLine'>
                                        <Line />
                                    </div>
                            </div>
                        );
                    }
                })
            )}
        </div>

DocumentsMainPart.proptypes = {
    itemToBeShown: PropTypes.array,
}

export default DocumentsMainPart;