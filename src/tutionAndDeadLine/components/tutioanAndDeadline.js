import React, {Fragment} from 'react';

import MajorSection from '../../majors/components/majorSection';

const TutionAndDeadline = () =>
    <Fragment>
        <header>
            <p className = 'documentsContentH1'>
            مهلت ثبت نام و شهریه دانشگاه اروپایی ارمنستان برای سال تحصیلی ۲۰۱۸‌ - ۲۰۱۹
            </p>
        </header>

        <MajorSection major = 'دوره یک ساله ی زبان آلمانی'>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۶۰۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۱۰ دسامبر</p>
                <p>: شروع ترم یک</p>
                <p style = {{marginRight: '50px'}}>یک اکتبر</p>
            </section>
        </MajorSection>

        <MajorSection major = ' دوره پیش دانشگاهی'>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۶۰۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۱۰ دسامبر</p>
                <p>: شروع ترم یک</p>
                <p style = {{marginRight: '50px'}}>یک اکتبر</p>
            </section>
        </MajorSection>

        <MajorSection major = 'مقطع کارشناسی '>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۸۷۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۲۰ سپتامبر</p>
                <p>: شروع ترم یک</p>
                <p style = {{marginRight: '50px'}}>یک اکتبر</p>
            </section>
        </MajorSection>

        <MajorSection major = 'مقطع کارشناسی ارشد '>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}> ۹۶۰،۰۰۰ درام</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۵ اکتبر</p>
                <p>: شروع ترم یک</p>
                <p style = {{marginRight: '50px'}}>ده اکتبر</p>
            </section>
        </MajorSection>

        <MajorSection major = 'مقطع دکترا '>
            <section style = {{textAlign: 'right', fontSize: '20px'}}>
                <p>:شهریه</p>
                <p style = {{marginRight: '50px'}}>  درام ۸۱۰،۰۰۰ - ۱،۲۰۰،۰۰۰</p>
                <p> :مهلت ثبت نام</p>
                <p style = {{marginRight: '50px'}}>تا ۱۰ دسامبر</p>
                <p>: شروع ترم یک</p>
                <p style = {{marginRight: '50px'}}>بعد از ثبت نام به صورت خصوصی و نیمه خصوصی</p>
            </section>
        </MajorSection>
    </Fragment>

export default TutionAndDeadline;