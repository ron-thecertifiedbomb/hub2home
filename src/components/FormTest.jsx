import React, { useState } from "react";

const FormTest = () => {
    const [storeName, setStoreName] = useState("");
    
    const [name, setName] = useState("");
    const [contactNumber, setContactNumner] = useState('');
    const [emailAddress, setEmailAddress] = useState("");
  
    const [errorName, setErrorName] = useState(false);
  const [errorContactNumber, seterrorContactNumber] = useState(false);
  const [errorEmailAddress, seterrorEmailAddress] = useState(false);

  
    const [error, setError] = useState({ name: false, contactNumber: false, emailAddress: false });
   
    const handleSubmit = (e) => {
      e.preventDefault();
      e.preventDefault();
      setName(e.target.value);
      setContactNumner(e.target.value);
      setEmailAddress(e.target.value);
  
  
      setError({
        name: name === "",
        contactNumber: contactNumber === "",
        emailAddress: emailAddress === ""
      });
  
      if (!error.name) {
        setErrorName(true);
      }
  
      if (!error.contactNumber) {
        setContactNumner(contactNumber);
      }
  
      if (!error.emailAddress) {
        setEmailAddress(emailAddress);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
          {error.name && <span>Please enter a name</span>}
        </label>
        <label>
          Contact Number:
          <input type="text" name="contactNumber" />
          {error.contactNumber && <span>Please enter a contact number</span>}
        </label>
        <label>
          Email Address:
          <input type="email" name="emailAddress" />
          {error.emailAddress && <span>Please enter an email address</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  };

export default FormTest