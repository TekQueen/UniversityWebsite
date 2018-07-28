import React, {Component, Fragment} from 'react';

import ContactButton from './contactButton';

import {databaseRef} from '../../config/firebaseConfig';

class ContactUs extends Component {
    state = {
        isClosed: true
    }

    handleContactUs = () => {
        this.setState(
            prevState => ({
                isClosed: !prevState.isClosed,
                name: '',
                email:'',
                message: ''
            })
        );
    }

    handleName = (event) => {
        event.persist();
        this.setState(
            prevState => {
                return {name: event.target.value}
            }
        );
    }

    handleEmail = (event) => {
        event.persist();
        this.setState(
            prevState => {
                return {email: event.target.value}
            }
        );
    }

    handleMessage = (event) => {
        event.persist();
        this.setState(
            prevState => {
                return {message: event.target.value}
            }
        );
    }

    handleSubmit = (event) => { 
        event.persist();
        databaseRef.ref().child('messages').push([
           this.state.name,
           this.state.email,
           this.state.message
        ]);
        alert('Thanks for sharing your idea with us!');
    }

    render() {

        return (
            
            this.state.isClosed ? 
                <ContactButton 
                    isClosed = {this.state.isClosed}
                    handleContactUs = {this.handleContactUs}
                />
            :    
                <Fragment>
                    <form className = {
                        (this.state.isClosed ? 'closed' : 'contactUs br')}
                        onSubmit = {this.handleSubmit}
                    >  
                        <ContactButton />
                        <input 
                            type = 'button' 
                            className = 'close'
                            value = 'x' 
                            onClick = {this.handleContactUs}
                        />

                        <p className = 'contactText help'>! داوطلب / بازدید کننده گرامی</p>
                        <p className = 'contactText'>این سیستم برای برقراری ارتباط و پاسخگویی</p> 
                        <p className = 'contactText'> به سوالات شما راه اندازی شده است</p>

                        <input 
                            placeholder= 'نام' 
                            className = 'applyInput' 
                            type = 'text' 
                            value = {this.state.name}
                            onChange = {this.handleName}
                        />
                        <p className = 'contactText'>برای اینکه بتوانیم  پاسخ گوی درخواست شما باشیم</p>
                        <p className = 'contactText'>لطفا آدرس ایمیل خود را وارد کنید</p>
                        <input 
                            className = 'applyInput' 
                            type = 'email'
                            placeholder= 'آدرس ایمل' 
                            value = {this.state.email}
                            onChange = {this.handleEmail}
                            required
                        />
                        <textarea 
                            className = 'applyInput'
                            placeholder= 'درخواست، سوال، اعتراض و ...' 
                            value = {this.state.message}
                            onChange = {this.handleMessage}
                        >
                        </textarea>
                        <input 
                            type = 'submit'
                            className = 'applySubmit contactSubmit'
                            value = 'ارسال' 
                        />
                    </form>
                </Fragment>
        );
    }
}

export default ContactUs;