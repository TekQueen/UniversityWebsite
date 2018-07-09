import React from 'react';
import ListOfThings from './listofthings';

const Majors = () => 
    <div className = 'br bs majorContainer'>
   
        <div className = 'documentsWhiteSpace animatedText'>
            <br />
            <h1 className = 'documentsContentH1'>رشته ها</h1>
            <ListOfThings
                isBlue = {true}
                listofthings = {[
                    'قانون / اروپا، عمومی، بین المللی',
                    'روابط بین الملل / دیپلماسی',
                    'مدیریت / مدیریت    بازرگانی',
                    'سرویس /گردشگری و مدیریت هتل',
                    'زبانشناسی',
                    'تعلیم و تربیت  و روانشناسی',
                    'فناوری اطلاعات  /برنامه نويسي   نرم افزار   ,ITامنیت  ,ITطراحیIT',
                    'قانون عمومی',
                    'اقتصاد بین المللی',
                    'اقتصاد , مدیریت   و اقتصاد از زمینه آن',
                    'زبان شناسی عمومی و تطبیقی',
                    'مدیریت , سیستم مدیریت و اجزای آنها',
                    'سیستم خودکار / IT'
                ]} 
            />
            <br />
        </div>
    </div>

export default Majors;