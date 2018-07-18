import React from 'react';

import management from '../imgs/management.jpg';
import tourism from '../imgs/tourism.jpg';
import IT from '../imgs/it.jpg';
import conferenceRoom from '../imgs/conference.jpg'

import ListOfThings from '../../components/listofthings';
import MajorSection from './majorSection';
import ListOfThingsBox from '../../components/listofthingsbox';
import Line from '../../components/line';
import MainImage from '../../components/mainimage';


const Majors = () => 
        <section className = 'animatedText'>

            <MainImage src = {conferenceRoom} />

            <br />
            <header>
                <h1 className = 'documentsContentH1'>رشته ها</h1>
            </header>

            <MajorSection major = 'مدیرت'>
                <Line /> 
                <ListOfThingsBox
                    sectionHeader = 'مدیرت'
                    imgSrc = {management}
                    imgAlt = 'مدیرت'
                    listofthings = {[
                        'مدیرت',
                        'مدیریت کسب و کار'
                    ]}  
                />
                <Line />
            </MajorSection>
            
            <MajorSection major = 'گردشگری'>
                <Line />
                <ListOfThingsBox
                    sectionHeader = 'گردشگری'
                    imgSrc = {tourism}
                    imgAlt = 'گردشگری'
                    listofthings = {[
                        'گردشگری',
                        'مدیریت هتل'
                    ]}  
                />
                <Line />
            </MajorSection>

            <MajorSection major = 'فناوری اطلاعات'>
                <Line /> 
                <ListOfThingsBox
                    sectionHeader = 'فناوری اطلاعات'
                    imgSrc = {IT}
                    imgAlt = 'فناوری اطلاعات'
                    listofthings = {[
                        'فناوری اطلاعات',
                        'امنیت فناوری اطلاعات',
                        'طراحی فناوری اطلاعات',
                        'مدیریت فناوری اطلاعات',
                        'نرم افزار فناوری اطلاعات'
                    ]}  
                />
                <Line />
            </MajorSection>
            
            <br />
        </section>
  

export default Majors;