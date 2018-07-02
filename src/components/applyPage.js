import React from 'react';
import '../App.css';

function ApplyPage(props) {
        
        return (
            <div className = 'applyPage'>
                <h2 className = 'formHeader'>Application form for foreign students 2018-2019 academic year</h2>
                
                <div id = 'formContainer'>
                    <form >

                        <h3 className = 'applyLabel'>First Name:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'First Name...'/>

                        <h3 className = 'applyLabel'>Last Name:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'Last Name...'/>

                        <h3 className = 'applyLabel'>Middle Name:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'Middle Name...'/>

                        <h3 className = 'applyLabel'>Date of Birth:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'dd'/>
                        <input className = 'applyInput' type = 'text' placeholder = 'mm'/>
                        <input className = 'applyInput' type = 'text' placeholder = 'yyy'/>

                        <h3 className = 'applyLabel'>Address:</h3>
                        <input className = 'applyInput' type = 'text' placeholder = 'Address...'/>

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

                        <h3 className = 'applyLabel'>Education</h3>
                        <label className = 'checkBoxcontainer'>Secondary
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>Higher
                            <input type = 'checkbox'/>
                            <span className = 'checkmark'></span>
                        </label>

                        <label className = 'checkBoxcontainer'>Other
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
        );

}

export default ApplyPage;