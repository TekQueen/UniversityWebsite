import React, {Fragment} from 'react';

import MajorSection from '../../majors/components/majorSection';

const TutionAndDeadline = () =>
    <Fragment>
        <header>
            <p className = 'documentsContentH1'>
            مهلت ثبت نام و شهریه دانشگاه اروپایی ارمنستان برای سال تحصیلی ۲۰۱۸ـ۲۰۱۹
            </p>
        </header>

        <MajorSection major = 'دوره یک ساله ی زبان آلمانی'>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۶۰۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۱۰ دسامبر</p>
            </section>
        </MajorSection>

        <MajorSection major = ' دوره پیش دانشگاهی'>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۶۰۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۱۰ دسامبر</p>
            </section>
        </MajorSection>

        <MajorSection major = 'مقطع کارشناسی '>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۸۷۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۲۰ سپتامبر</p>
            </section>
        </MajorSection>

        <MajorSection major = 'مقطع کارشناسی ارشد '>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۹۶۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۵ اکتبر</p>
            </section>
        </MajorSection>

        <MajorSection major = 'مقطع دکترا '>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۸۱۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۱۰ دسامبر</p>
            </section>
        </MajorSection>
    </Fragment>

export default TutionAndDeadline;