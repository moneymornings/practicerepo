import React, { useState } from 'react';

const MyForm =() => {// creating a form function
    const [formData, setFormData] = useState({ // creating a variable for the form data, and setformdata to update the form data [currentstate, updatedstate (setState)]
        username: '', // property names with empty values included in form username email, password
        email: '',
        password: ''

    });

    const [submittedData, setSubmittedData] = useState(null); //variable for when user submits the form, updatedData --- the default state = null

    const handleInputChange = (event) => {//create variable for input change for event
        const {name, value} = event.target;//target name property of our inputs, creating a variable for placeholder targeting form data, 
        setFormData({...formData, [name]: value});// spreading it thru the object, update whatever the value is for the name value
    

    };

    const handleSubmit = (event) => {//create variable
        event.preventDefault();//when an event happens prevent default behavior of reloading page
        setSubmittedData (formData); //update submitted data to the form data 
        setFormData({// updates  form data to whatever was submitted in the form 
            username: '',
            email: '',
            password: ''

        });

    };

  



    return( //this function returns what will print on the page; onsubmit to create submit form 
    <div> 
    <form onSubmit={handleSubmit}> 
        <input
            type ="text"
            placeholder= "Username"
            name= "username"
            value={formData.username}
            onChange ={handleInputChange}
            />

            <input
                type= "email"
                placeholder= "Email"
                name= "email"
                value= {formData.email}
                onChange={handleInputChange}
                />

                <input
                    type= "password"
                    placeholder= "password"
                    name= "password"
                    value= {formData.password}
                    onChange={handleInputChange}

                    />
                    <button type="submit">Submit</button>
    </form>

        {submittedData && ( //im displaying submitted Data in this format
            <div>
            <h2>Submitted Data:</h2>
            <p><strong>Username:</strong>{submittedData.username}</p>
            <p><strong>Email:</strong>{submittedData.email}</p>
            <p><strong>Password:</strong>{submittedData.password}</p>

            </div>

        )}



    </div>





    )

};





export default MyForm