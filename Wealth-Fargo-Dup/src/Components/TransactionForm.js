import React, {useState} from 'react'//import useState


//created a function for the form
const TransactionForm = () => {
    //setting up the state for my amount form data
    const [formData, setFormData] = useState({
        amount:'',
    });
    //setting up the updated state of the form data to submitted data
    const [submittedData, setSubmittedData] = useState(null);

    const [dollars, setDollars] = useState(0)

    const withdraw = () =>{
        setDollars(dollars - formData)
    }

    const deposit = () => {
        setDollars(dollars + formData)
    }

    //create function  to handle inputted data and updates to formData 
    const handleInputChange =(event) =>{
        const {name, value} = event.target; 
        setFormData({...formData, [name]: value});
    };

    //creating function to handle submitted data 
    const handleSubmit = (event) =>{
        event.preventDefault(); //This will stop the page from refreshing constantly
        setSubmittedData(formData); //This will store and update the form data into submitted data 
        setFormData({ //resets formData state to empty values
            amount:''
        });
}
    


  
    return (
    <>
    <h2> Welcome to WEALTH FARGO</h2>
    <img src =".//Users/corcoding/digitalcrafts/WealthFargo/wealthfargo-account-app/src/Components/WFlogo.png"></img>
    <h3> My Account Balance: {formData.amount}</h3>
    <form onSubmit ={handleSubmit}>
    <input //input field for the amount
    type=""
    name="amount"
    placeholder ="$"
    value={formData.amount}
    onChange = {handleInputChange} //calls the handleInputChange function to update the form 
    />
     <button onClick={deposit}>Deposit </button>
    <button onClick={withdraw}>Withdraw</button>
    
    
    
    </form>
    

    </>
  )

}


export default TransactionForm