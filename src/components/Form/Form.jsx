import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { Radio } from "@material-tailwind/react";
import { Select, Option, Textarea, Input } from "@material-tailwind/react";
import { BsCardImage } from "react-icons/bs";
import {Buyer, Seller} from '../../constants/constants';
import  styles  from "../../constants/style";


const Form = () => {

  const navigate = useNavigate();
  
  const [buyer, setBuyer] = useState('');
  const [seller, setSeller] = useState('');
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const [concernAndDescription, setConcernAndDescription] = useState("");
  const [buyersValueConcern, setBuyersValueConcern] = useState("");
  const [sellersValueConcern, setSellerssValueConcern] = useState("");
  const [preferredModeOfCommunication, setPreferredModeOfCommunication] = useState("");

  const [buyerTrue, setBuyerTrue] = useState(false)
  const [sellerTrue, setSellerTrue] = useState(false)

  const [errorBuyer, setErrorBuyer] = useState(false);
  const [errorSeller, setErrorSeller] = useState(false);

  const [errorName, setErrorName] = useState(false);
  const [errorContactNumber, setErrorContactNumber] = useState(false);
  const [errorEmailAddress, setErrorEmailAddress] = useState(false);

  useEffect(() => {
    setName("");
    setContactNumber("");
    setEmailAddress("");
  }, [errorName, errorContactNumber, errorEmailAddress]);

  const inputName = (e) => {
      setName(e.target.value); 
  };
  const inputStoreName = (e) => {
    setStoreName(e.target.value); 
  };
  const inputContactNumber = (e) => {
    setContactNumber(e.target.value); 
  };
  const inputEmailAddress = (e) => {
    setEmailAddress(e.target.value); 
  };

  const onOptionChangeBuyer = (e) => {
    setBuyer(e.target.value);
    setBuyerTrue(true);
    setSellerTrue(true)
    setSeller('');
  };

  const onOptionChangeSeller = (e) => {
    setSeller(e.target.value);
    setBuyerTrue(true);
    setSellerTrue(true);
    setBuyer('');
  };

  const selectBuyerConcern = (e) => {
    setBuyersValueConcern(e);
  };
  const selectSellerConcern = (e) => {
    setSellerssValueConcern(e);
  };

  const selectPreferredModeOfCommunication = (e) => {
    setPreferredModeOfCommunication(e);
  };

 const sendEmail = () => {
  navigate("/success")
  console.log('We will send this information')
  alert('We will send this information')
 }

 const stayOnThisPage = () => {
  
  console.log('stay on this page')
  alert('stay on this page')
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.value);
    setContactNumber(e.target.value);
    setEmailAddress(e.target.value);
    setConcernAndDescription(e.target.value);
    
    {name === "" ? setErrorName(true) : setName("")}
    {contactNumber === "" ? setErrorContactNumber(true) : setContactNumber("")}
    {emailAddress === "" ? setErrorEmailAddress(true) : setEmailAddress("")}
    {buyer === "" ? setErrorBuyer(true) : ''}
    {seller === "" ? setErrorSeller(true) : ''}

    
    {name && contactNumber && emailAddress && buyerTrue && sellerTrue ? sendEmail() : stayOnThisPage() }

    setStoreName("");
    setConcernAndDescription("");
  };

  const handleFocus = () => {
    setErrorName(false);
    setErrorContactNumber(false);
    setErrorEmailAddress(false);
    setErrorBuyer(false);
    setErrorSeller(false);
  };

  // function isAlphanumeric(input) {
  //   const regex = /^[a-zA-Z0-9]+$/;
  //   return regex.test(input);
  // }
  // console.log(isAlphanumeric(contactNumber)); 
  
  console.log(`I am a: ${buyer}`);
  console.log(`I am a: ${seller}`);
  console.log(`Complete Name: ${name}`);
  console.log(`Contact Number: ${contactNumber}`);
  console.log(`Store Name (optional): ${storeName}`);
  console.log(`Email Address: ${emailAddress}`);
  console.log(`Concern/s: ${buyersValueConcern}`);
  console.log(`Concern/s: ${sellersValueConcern}`);
  console.log(`Concern/s and Description: ${concernAndDescription}`);
  console.log(`Preferred Mode of Communication: ${preferredModeOfCommunication}`);
  // console.log(`buyer status: ${buyerTrue}`);
  // console.log(`seller status: ${sellerTrue}`);
  return (

    
    <form onSubmit={handleSubmit} className="p-5 pt-[70px] mb-40 max-w-[1020px] w-full m-auto  md:p-2px lg:pt-[86px]">
      <h1 className="font-Roboto text-[18px]">I am a</h1>

      <div className="flex sm:gap-25 md:gap-[35px] mt-[15px] mb-[15px]">
        <div className="flex sm:gap-1 justify-center items-center md:gap-2">
         
          <Radio
            type="radio"
            id="buyer"
            name="buyer"
            color="red"
            value="Buyer"
            checked={buyer === Buyer}
            onChange={onOptionChangeBuyer}
          />

          <label className={styles.title}>Buyer</label>
        </div>
        
        <div className="flex sm:gap-2 justify-center items-center md:gap-3">
          <Radio
            type="radio"
            id="seller"
            name="seller"
            color="red"
            value="Seller"
            checked={seller === Seller}
            onChange={onOptionChangeSeller}
          />

          <label className={styles.title}>Seller</label>
        </div>
      </div>

      {errorBuyer && errorSeller ? (
        <p className={styles.error}>
          This field is required
        </p>
      ) : (
        <p className="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

      <div className="flex flex-col w-full gap-2 mt-5 mb-1">
        <label className={styles.title}>
          Complete Name
        </label>

        <Input
          color="red"
          size="md"
          label="Complete Name"
          type="text"
          id="name"
          pattern="^[a-zA-Z0-9\s\'\]+$"
         
          title="Please enter alphanumeric characters only"
          value={name}
          onChange={inputName}  
          onFocus={handleFocus}
        />
      </div>

      {errorName ? (
        <p className={styles.error}>
          This field is required
        </p>
      ) : (
        <p className="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

      <div className="flex flex-col w-full gap-2 mt-5 mb-10">
        <label className={styles.title}>
          Store Name (if applicable)
        </label>

        <Input
          color="red"
          size="md"
          label="Enter your store name"
          id="store name"
          type="text"
          pattern="/^[a-z\d\-_\@\s]+$/"
          value={storeName}
          onChange={inputStoreName}
          onFocus={handleFocus}
        />
      </div>

      <div className="flex flex-col w-full gap-2 mt-5 mb-1">
        <label className={styles.title}>
          Contact Number
        </label>

        <Input
          color="red"
          size="md"
          label="Enter your contact number"
          id="contact-number"
          type="number"
          value={contactNumber}
          onChange={inputContactNumber}
          onFocus={handleFocus}
        />
      </div>
      {errorContactNumber ? (
        <p className={styles.error}>
          This field is required
        </p>
      ) : (
        <p className="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

      <div className="flex flex-col w-full gap-2 mt-5 mb-1">
        <label className={styles.title}>
          Email Address
        </label>
        <Input
          color="red"
          size="md"
          label="Enter your email address"
          id="email address"
          type="email"
          value={emailAddress}
          onChange={inputEmailAddress}
          onFocus={handleFocus}
        />
      </div>

      {errorEmailAddress ? (
        <p className={styles.error}>
          This field is required
        </p>
      ) : (
        <p className="invisible text-red-500 text-xs italic mb-5 ">
          This field is required
        </p>
      )}

      {buyer ? (
        <div className="flex flex-col w-full gap-3 mb-5">
          <label className={styles.title}>
            Concern/s
          </label>
          <Select
            color="red"
            label="Enter Concerns"
            onChange={selectBuyerConcern}
            value={buyersValueConcern}
          >
            <Option value="product and description">Product Desctiption</Option>
            <Option value="store information">Store Information</Option>
            <Option value="warranty">Warranty</Option>
            <Option value="about shipment">About Shipment</Option>
            <Option value="about the order">About the Order</Option>
            <Option value="returns and refunds">Returns and Refunds</Option>
            <Option value="about cancellation">About Cancellation</Option>
            <Option value="about my account">About My Account</Option>
            <Option value="other concerns">Other Concerns</Option>
          </Select>
        </div>
      ) : (
        ""
      )}

      {seller ? (
        <div className="flex flex-col w-full gap-3 mb-5">
          <label className={styles.title}>
            Concern/s
          </label>
          <Select
            color="red"
            label="Enter Concerns"
            onChange={selectSellerConcern}
            value={sellersValueConcern}
          >
            <Option value="about my account">About My Account</Option>
            <Option value="about the process">About the Process</Option>
            <Option value="about the packaging">About the Packaging</Option>
            <Option value="claims and payment">Claims and Payment</Option>
            <Option value="about the order">About the Order</Option>
            <Option value="returns and refunds">Returns and Refunds</Option>
            <Option value="other concerns">Other Concerns</Option>
          </Select>
        </div>
      ) : (
        ""
      )}

      {/* Concern/s Description */}

      <div className="flex flex-col w-full gap-3 mt-5 mb-5">
        <label className={styles.title}>
          Concern/sDescription
        </label>

        <Textarea
          color="red"
          label="Enter your concerns description"
          type="text"
          value={concernAndDescription}
          onChange={(e) => setConcernAndDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-full gap-3 mt-5 mb-10">
        <label className=" font-Roboto font-medium text-[18px] text-[#434343]">
          Preferred Mode of Communitcation
        </label>

        <Select color="red" label="Enter Concerns" onChange={selectPreferredModeOfCommunication}value={preferredModeOfCommunication}>
          <Option value="phone call">Phone Call</Option>
          <Option value="tet message">Text Message</Option>
          <Option value="email">Email</Option>
        </Select>
      </div>

      <label className={styles.title}>
        Image <span className=" text-red-500">(Optional)</span>
      </label>
      <BsCardImage
        style={{ color: "grey", fontSize: "45px", marginTop: "5px" }}
      />

      <div className="flex w-full justify-end mt-[60px]  border-gray-600 border-t-2 border-dashed border-spacing-1.5  pt-[60px] ">
        
        <button
          type="submit"
          className="w-full md:w-[180px] h-[52px] bg-[#f02f1b]  rounded-md text-white">
          Submit
        </button>

      </div>

      
    </form>
  );
};

export default Form;
