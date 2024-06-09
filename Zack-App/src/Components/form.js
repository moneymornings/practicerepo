import React, { useState } from 'react';

// Define a functional component called MyForm
const MyForm = () => {
  // Use useState hooks to manage form data and submitted data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes and update formData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setSubmittedData(formData); // Store form data in submittedData state
    setFormData({ // Reset formData state to empty values
      username: '',
      email: '',
      password: ''
    });
    console.log(formData); // Log the form data to the console (for demonstration)
  };

  // Render the form and submitted data
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input fields for username, email, and password */}
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange} // Call handleInputChange on input change
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange} // Call handleInputChange on input change
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange} // Call handleInputChange on input change
        />
        {/* Submit button triggers handleSubmit function */}
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data if it exists */}
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

// Export MyForm component as the default export
export default MyForm;
