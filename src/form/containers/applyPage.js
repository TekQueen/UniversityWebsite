import React, {Component} from 'react';
import '../../App.css';

import Form from './form';
import Login from './login';
import firebaseConfig, {databaseRef} from '../../config/firebaseConfig'; 

class ApplyPage extends Component {


    /*
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }
    
    authListener() {
        firebaseConfig.auth().onAuthStateChanged( user => {
          console.log(user);
          if (user) {
            this.setState({user});
            // localStorage.setItem('user', user.uid);
          } else {
            this.setState({user: null});
            // localStorage.removeItem('user');
          }
        })
      }
      */

    render() {
        return (
            <section className = 'br bs animatedText'>
                <section className = 'applyInnerPage'>
                      <Form />  
                </section>
            </section>
           
        );
    }

    /*
    componentDidMount() {
        this.authListener();
    }
    */
}

export default ApplyPage;