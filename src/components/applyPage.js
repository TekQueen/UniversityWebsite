import React from 'react';
import '../App.css';

const ApplyPage = (props) => {
        
        return (
            <div className = 'br bs animatedText'>
                <div className = 'applyInnerPage'>
                <h2 className = 'formHeader'>Application form for foreign students 2018-2019 academic year</h2>
                
                <div id = 'formContainer'>
                    <form >

                        <h3 className = 'applyLabel'>First Name:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'First Name...'/>

                        <h3 className = 'applyLabel'>Last Name:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'Last Name...'/>

                        <h3 className = 'applyLabel'>Father's Name:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = "Father's Name..."/>

                        <h3 className = 'applyLabel'>Date of Birth:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'Date of Birth...'/>

                        <h3 className = 'applyLabel'>Local Address:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'Local Address...'/>

                        <h3 className = 'applyLabel'>Address in Armenia:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'Address in Armenia...'/>

                        <h3 className = 'applyLabel'>Telephone Number:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'Telephone Number...'/>

                        <h3 className = 'applyLabel'>Email Adress:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'E-mail Adress...'/>
                        
                        <h3 className = 'applyLabel'>Gender</h3>
                        <label className = 'checkBoxcontainer'>Female
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>Male
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>
                        
                        <h3 className = 'applyLabel'>Foreign language studied at school</h3>
                        <label className = 'checkBoxcontainer'>English
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>French
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>German
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>Arabic
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <h3 className = 'applyLabel'>Education</h3>
                        <label className = 'checkBoxcontainer'>High School
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>Pre University
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>Bachelor
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>Master
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>phD
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>
                        
                        <br/><br/><br/>
                        <label className = 'checkBoxcontainer eteraf'>
                            I declare that the above given information is correct to the best of my knowledge.
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <input type = 'submit' value = 'submit' className = 'applySubmit'/>
                    </form>
                    </div>
                </div>
            </div>
        );

}

export default ApplyPage;