import React, { useState, useEffect } from "react";
import { Radio } from "@material-tailwind/react";
import { Select, Option, Textarea, Input } from "@material-tailwind/react";
import { BsCardImage } from "react-icons/bs";

const Form = () => {

  const [buyer, setBuyer] = useState("");
  const [seller, setSeller] = useState("");

  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const [errorBuyer, seterrorBuyer] = useState(false);
  const [errorSeller, seterrorSeller] = useState(false);

  const [errorName, setErrorName] = useState(false);
  const [errorContactNumber, setErrorContactNumber] = useState(false);
  const [errorEmailAddress, seterrorEmailAddress] = useState(false);

  useEffect(() => {
    setName("");
    setContactNumber("");
    setEmailAddress("");
  }, [errorName, errorContactNumber, errorEmailAddress]);

  const onOptionChangeBuyer = (e) => {
    setBuyer(e.target.value);
    setSeller("");
    seterrorBuyer(false);
    seterrorSeller(false);
  };

  const onOptionChangeSeller = (e) => {
    setSeller(e.target.value);
    setBuyer("");
    seterrorBuyer(false);
    seterrorSeller(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(e.target.value);
    setContactNumber(e.target.value);
    setEmailAddress(e.target.value);

    {
      name === "" ? setErrorName(true) : setName("");
    }
    {
      contactNumber === "" ? setErrorContactNumber(true) : setContactNumber("");
    }
    {
      emailAddress === "" ? seterrorEmailAddress(true) : setEmailAddress("");
    }
    {
      buyer === "" ? seterrorBuyer(true) : "";
    }
    {
      seller === "" ? seterrorSeller(true) : "";
    }
    setStoreName("");
  };

  const handleFocus = () => {
    setErrorName(false);
    setErrorContactNumber(false);
    seterrorEmailAddress(false);
    seterrorBuyer(false);
    seterrorSeller(false);
  };

  console.log(`buyer: ${buyer}`);
  console.log(`seller: ${seller}`);
  console.log(`name: ${name}`);
  console.log(`contact number: ${contactNumber}`);
  console.log(`email address: ${emailAddress}`);
  console.log(errorName)

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-5 pt-[70px] mb-40 max-w-[1020px] w-full m-auto  md:p-2px lg:pt-[86px]">
      <h1 className=" font-Roboto font-bold text-[18px]">I am a</h1>

      <div className="flex sm:gap-25 md:gap-[35px] mt-[15px] mb-[15px]">
        <div className="flex sm:gap-1 justify-center items-center md:gap-2">
          <Radio
            type="radio"
            id="buyer"
            name="buyer"
            color="red"
            value="Buyer"
            checked={buyer === "Buyer"}
            onChange={onOptionChangeBuyer}
          />
          <label>Buyer</label>
        </div>

        <div className="flex sm:gap-2 justify-center items-center md:gap-3">
          <Radio
            type="radio"
            id="seller"
            name="seller"
            color="red"
            value="Seller"
            checked={seller === "Seller"}
            onChange={onOptionChangeSeller}
          />
          <label>Seller</label>
        </div>
      </div>

      {errorBuyer && errorSeller ? (
        <p class=" text-green-500 text-xs italic mb-5">This field is required</p>
      ) : (
        <p class="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

    
      <div className="flex flex-col w-full gap-2 mt-5 mb-1">
        <label className=" font-Roboto font-bold text-[18px]">
          Complete Name
        </label>
        
       {errorName ? (
        <Input
          size="md"
          label="Complete Name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={handleFocus}
          success
        />) : 
        ( <Input
          color="red"
          size="md"
          label="Complete Name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={handleFocus}/>)}
      </div>

      {errorName ? (
        <p className=" text-green-500 text-xs italic mb-5">This field is required</p>
      ) : (
        <p className="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

      <div className="flex flex-col w-full gap-2 mt-5 mb-10">
        <label className=" font-Roboto font-bold text-[18px]">
          Store Name (if applicable)
        </label> 
        <Input
        color="red"
          size="md"
          label="Enter your store name"
          id="email address"
          type="text"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          onFocus={handleFocus} /> 
      </div>

      <div className="flex flex-col w-full gap-2 mt-5 mb-1">
        <label className=" font-Roboto font-bold text-[18px]">
          Contact Number
        </label>
        
        {errorName ? (
        <Input
          size="md"
          label="Enter your contact number"
          id="email address"
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          onFocus={handleFocus}
          success
        />) :( <Input
          color="red"
          size="md"
          label="Enter your contact number"
          id="email address"
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          onFocus={handleFocus}
        />)}

      </div>
      {errorContactNumber ? (
        <p className=" text-green-500 text-xs italic mb-5">This field is required</p>
      ) : (
        <p className="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

      <div className="flex flex-col w-full gap-2 mt-5 mb-1">
        <label className=" font-Roboto font-bold text-[18px]">
          Email Address
        </label>
        {errorName ? (
        <Input
          size="md"
          label="Enter your email address"
          id="email address"
          type="text"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          onFocus={handleFocus}
          success
        />) : 
        ( <Input
          color="red"
          size="md"
          label="Enter your email address"
          id="email address"
          type="text"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          onFocus={handleFocus}
        />)}
      </div>

      {errorEmailAddress ? (
        <p className=" text-green-500 text-xs italic mb-5">This field is required</p>
      ) : (
        <p className="invisible text-red-500 text-xs italic mb-5 ">
          This field is required
        </p>
      )}

      <div className="flex flex-col w-full gap-3 mb-5">
        <label className=" font-Roboto font-bold text-[18px]">Concern/s</label>
        <Select color="red" label="Enter Concerns">
          <Option>Product Desctiption</Option>
          <Option>Store Information</Option>
          <Option>Warranty</Option>
          <Option>About Shipment</Option>
          <Option>Returns and Refunds</Option>
          <Option>About Cancellation</Option>
          <Option>Other Concerns</Option>
        </Select>
      </div>

      <div className="flex flex-col w-full gap-3 mt-5 mb-5">
        <label className=" font-Roboto font-bold text-[18px]">
          Concern/sDescription
        </label>

        <Textarea color="red" label="Enter your concerns description" />
      </div>

      <div className="flex flex-col w-full gap-3 mt-5 mb-10">
        <label className=" font-Roboto font-bold text-[18px]">
          Preferred Mode of Communitcation
        </label>

        <Select color="red" label="Enter Concerns">
          <Option>Phone Call</Option>
          <Option>Text Message</Option>
          <Option>Email</Option>
        </Select>
      </div>

      <label className=" font-Roboto font-bold text-[18px]">
        Image <span className=" text-red-500">(Optional)</span>
      </label>
      <BsCardImage
        style={{ color: "grey", fontSize: "45px", marginTop: "5px" }}
      />

      <div className="flex w-full justify-end mt-[60px]  border-gray-600 border-t-2 border-dashed border-spacing-1.5  pt-[60px] ">
        <button
          type="submit"
          className=" w-full md:w-[180px] h-[52px] bg-[#f02f1b]  rounded-md text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
