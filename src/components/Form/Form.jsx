import React, { useState, useEffect } from "react";
import { Radio } from "@material-tailwind/react";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { BsCardImage } from "react-icons/bs";

const Form = () => {
  // const [buyer, setBuyer] = useState("");
  // const [seller, setSeller] = useState("");
  const [storeName, setStoreName] = useState("");

  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorContactNumber, setErrorContactNumber] = useState(false);
  const [errorEmailAddress, seterrorEmailAddress] = useState(false);

  useEffect(() => {
    setName("");
    setContactNumber("");
    setEmailAddress("");
  }, [errorName, errorContactNumber, errorEmailAddress]);
  

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
  };

  const handleFocus = () => {
    setErrorName(false);
    setErrorContactNumber(false);
    seterrorEmailAddress(false);
  };

 

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-5 pt-[70px] mb-40 max-w-[1140px] w-full m-auto  md:p-2px lg:pt-[86px]"
    >
      <h1 className=" font-Roboto font-bold text-[18px]">I am a</h1>

      <div className="flex sm:gap-20 md:gap-35 mt-[15px] mb-[15px]">
        <div className="flex sm:gap-2 justify-center items-center md:gap-5">
          <Radio id="red" name="color" color="red" /> <label>Buyer</label>
        </div>
        <div className="flex sm:gap-2 justify-center items-center md:gap-5">
          <Radio id="red" name="color" color="red" /> <label>Seller</label>
        </div>
      </div>

      <label className=" font-Roboto font-bold text-[18px]">
        Complete Name
      </label>
      <input
        className=" mt-[12px] shadow appearance-none border border-red-500 rounded w-full h-[45px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Complete Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={handleFocus}
      />
      {errorName ? (
        <p class=" text-red-500 text-xs italic mb-5">This field is required</p>
      ) : (
        <p class="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

      <label className=" font-Roboto font-bold text-[18px]">
        Store Name (if applicable)
      </label>
      <input
        className=" mt-[12px] mb-[51px] mb-shadow appearance-none border border-red-500 rounded w-full h-[45px] py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter your store name"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        onFocus={handleFocus}
      />

      <label className=" font-Roboto font-bold text-[18px]">
        Contact Number
      </label>
      <input
        className=" mt-[12px] shadow appearance-none border border-red-500 rounded w-full h-[45px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="contact-number"
        type="number"
        placeholder="Enter your contact number"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        onFocus={handleFocus}
      />
      {errorContactNumber ? (
        <p class=" text-red-500 text-xs italic mb-5">This field is required</p>
      ) : (
        <p class="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

      <label className=" font-Roboto font-bold text-[18px]">
        Email Address
      </label>
      <input
        className="  mt-[12px] shadow appearance-none border border-red-500 rounded w-full h-[45px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="email address"
        type="text"
        placeholder="Enter your email address"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        onFocus={handleFocus}
      />
      {errorEmailAddress ? (
        <p class=" text-red-500 text-xs italic mb-5">This field is required</p>
      ) : (
        <p class="invisible text-red-500 text-xs italic mb-5">
          This field is required
        </p>
      )}

      <div className="flex flex-col w-full gap-6 mb-5">
        <label className=" font-Roboto font-bold text-[18px]">Concern/s</label>

        <Select label="Enter Concerns" error>
          <Option>Product Desctiption</Option>
          <Option>Store Information</Option>
          <Option>Warranty</Option>
          <Option>About Shipment</Option>
          <Option>Returns and Refunds</Option>
          <Option>About Cancellation</Option>
          <Option>Other Concerns</Option>
        </Select>
      </div>

      <label className=" font-Roboto font-bold text-[18px]">
        Concern/sDescription
      </label>

      <div className="flex flex-col w-full mt-5">
        <Textarea label="Enter your concerns description" error />
      </div>

      <div className="flex flex-col w-full gap-6 mb-5">
        <label className=" font-Roboto font-bold text-[18px]">
          Preferred Mode of Communitcation
        </label>

        <Select label="Enter Concerns" error>
          <Option>Phone Call</Option>
          <Option>Tet Message</Option>
          <Option>Email</Option>
        </Select>
      </div>

      <label className=" font-Roboto font-bold text-[18px]">
        Image <span className=" text-red-500">(Optional)</span>
      </label>
      <BsCardImage
        style={{ color: "grey", fontSize: "45px", marginTop: "5px" }}
      />

      <div className="flex w-full justify-end mt-10">
        <button
          type="submit"
          className="w-[180px] h-[52px] bg-[#f02f1b]  rounded-md text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

