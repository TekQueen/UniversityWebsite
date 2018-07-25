import React, {Component} from 'react';

import uniHall from '../image/uniHall.jpg';
import library from '../image/library.jpg';
import Line from './line';

import LongText from './longtext';
import ListOfThingsBox from './listofthingsbox';

import '../App.css';

class AboutUs extends Component {

    render() {
        let test = ``
    return (
        <section id = 'aboutUsSection'>
            <header>
                <h2>دانشگاه اروپایی ارمنستان</h2>
            </header>

                <section>
                    <LongText 
                        aboutUsText = 'دانشگاه اروپایی ارمنستان توسط مؤسسات آموزشی عالی از جمله دانشگاه مارسیه فرانسه و دولت جمهوری ارمنستان در سال ۲۰۰۱ تأسیس شده است۰نام این مرکز آموزشی عالی در سال ۲۰۱۸ به علت تغییر قانون آموزش عالی کشور ها ی اروپایی از آکادمی آموزشی عالی منطقه یی اروپایی به دانشگاه تغییر یافته است'
                    />

                    <section className = 'aboutUsSecondSection, aboutUsText'>
                    <span className = 'paragraphSpace'>داگاه</span>     
                    دانشگاه اروپایی ارمنستان عضو انجمن
                    <span><a href = 'https://www.eurashe.eu/' target = '_blank'>EURASHE</a></span> 
                    می باشد. در این انجمن ۵۰۰ دانشگاه معتبر از ۴۰ کشور جهان عضو می باشند.مدارک کارشناسی، کارشناسی ارشد و دکترای دانشگاه های عضو این انجمن مورد تأیید یکدیگر می باشد 
                    <span>.</span>  
                    </section> 


                </section>
          
                <Line />
                 <ListOfThingsBox 
                    sectionHeader = '
                    مزایای تحصیل در دانشگاه اروپایی ارمنستان
                    '
                    listofthings = {[
                        'آموزش عالی با استانداردهای اروپایی با کیفیت بالا',
                        'واحدهای مشترک با بیش از ۴۰۰ دانشگاه اروپایی دنیا',
                        'هزینه مناسب نسبت به کشورهای اروپایی برای ادامه تحصیل',
                        'مورد تایید بودن مدارک این دانشگاه در بیش از ۴۰ کشور ',
                        'مورد تایید بودن مدارک این دانشگاه در ایران',
                    ]}
                />

                <Line />
                 <ListOfThingsBox 
                    sectionHeader = '
                    مزایای تحصیل در ارمنستان
                    '
                    listofthings = {[
                        'هزینه مناسب نسبت به کشورهای اروپایی',
                        'رفت و آمد آسان و نزدیک بودن به ایران', 
                        'فرهنگ نزدیک به مردمان ایران و آب و هوای فوق العاده',
                    ]}
                />
            </section>   
    );
}
}

export default AboutUs;