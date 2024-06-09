import React, {useState, } from 'react'



//creates function for form 
const BirthdayForm = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        dish: '',
        birthdaygreeting: ''

    });

    //creates function for submitted data 
    const [submittedData, setSubmittedData]= useState(null);

    //function for input and updates the form data state
    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit =(event) => {//updates inputted data 
        event.preventDefault(); 
        setSubmittedData(formData);
        setFormData({
            name: '',
            age: '',
            dish: '',
            birthdaygreeting: '',
        

        });
        
       
      

    };










  return (

    <div>
    <h1>Welcome to Ariana's 10th Birthday Party!</h1>
    <label> Please Sign In </label>

    <form onSubmit ={handleSubmit} >
    
    <input 
    type="text"
    placeholder= "Name"
    name="name"
    value={formData.name}
    onChange={handleInputChange}

    />

    <input
    type="number"
    placeholder = "Age"
    name ="age"
    value={formData.age}
    onChange={handleInputChange}
    />

    <input
    type="text"
    placeholder = "Dish"
    name = "dish"
    value={formData.dish}
    onChange={handleInputChange}
    />

    <input
     type="text"
    placeholder = "Birthday Greeting"
    name = "birthdaygreeting"
    value={formData.birthdaygreeting}
    onChange={handleInputChange}
    />
    <button type="submit">Submit</button>
   </form>


   


    
        {submittedData && (
            <div>
                <h2>Submitted Data:</h2>
                <p><b>Name: </b>{submittedData.name}</p>
                <p><b>Age: </b>{submittedData.age}</p>
                <p><b>Dish: </b>{submittedData.dish}</p>
                <p><b>Birthday Greeting: </b>{submittedData.birthdaygreeting}</p>
            </div>  
        )}
        
        </div>
    );
  
};


export default BirthdayForm;