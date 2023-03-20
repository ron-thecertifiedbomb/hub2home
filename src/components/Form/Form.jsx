import React, { useState } from "react";
// import Hero from "../../components/Hero/Hero";
// import GoToTop from "../../components/GoToTop/GoToTop";
import styles from "../../constants/style";
import { Radio } from "@material-tailwind/react";
const Home = () => {
  const [type, setType] = useState("Buyer");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [commentsError, setCommentsError] = useState("");
  const [store, setStore] = useState("");
  const [storeError, setStoreError] = useState("");
  const [typeConcern, setTypeConcern] = useState("");
  const [errorValueConcern, setErrorValueConcern] = useState(false);

  const selectConcern = (e) => {
    setTypeConcern(e.target.value);
    setErrorValueConcern(false)
  };

  const onOptionChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value.slice(0, 50));
      if (value.length > 50) {
        setNameError("Name should not exceed 50 characters.");
      } else {
        setNameError("");
      }
    } else if (name === "store") {
      setStore(value.slice(0, 50));
      if (value.length > 50) {
        setStoreError("Store Name should not exceed 50 characters.");
      } else {
        setStoreError("");
      }
    } else if (name === "email") {
      setEmail(value.slice(0, 30));
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        setEmailError("Please enter a valid email.");
      } else if (value.length > 30) {
        setEmailError("Email should not exceed 20 characters.");
      } else {
        setEmailError("");
      }
    } else if (name === "phone") {
      setPhone(value.replace(/[^0-9]/g, "").slice(0, 20));
      if (!/^[0-9]{0,20}$/.test(value)) {
        setPhoneError("This entry can only contain numbers.");
      } else {
        setPhoneError("");
      }
    } else if (name === "comments") {
      setComments(value);
      if (value.length > 200) {
        setCommentsError("Comments should not exceed 200 characters.");
      } else {
        setCommentsError("");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setNameError("This is required.");
    }
    if (!email.trim()) {
      setEmailError("This is required.");
    }
    if (!phone.trim()) {
      setPhoneError("This is required.");
    }
    if (!comments.trim()) {
      setCommentsError("This is required.");
    }

    if (!typeConcern) {
      setErrorValueConcern(true);
    }

    if (
      !phoneError &&
      typeConcern &&
      name.trim() &&
      email.trim() &&
      phone.trim() &&
      comments.trim() &&
      store.length < 50 &&
      phone.length < 20 &&
      name.length < 50 &&
      email.length < 30 &&
      /^\S+@\S+\.\S+$/.test(email) &&
      /^[0-9]+$/.test(phone) &&
      comments.length <= 200
    ) {
      alert("we will send this informtaion");
      console.log("Type:", type);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Comments:", comments);
      console.log("Concern:", typeConcern);
    } else {
      alert("stay on this pages");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className="font-Roboto text-[18px]">I am a</h1>
        <div className={styles.container}>
          <div className={styles.radiobuttoncontainer}>
            <Radio
              className="radio h-7 w-7"
              type="radio"
              id="buyer"
              name="buyer"
              color="red"
              value="Buyer"
              checked={type === "Buyer"}
              onChange={onOptionChangeType}
            />
            <label className={styles.title}>Buyer</label>
          </div>

          <div className={styles.radiobuttoncontainer}>
            <Radio
              className="radio h-7 w-7"
              type="radio"
              id="seller"
              name="seller"
              color="red"
              value="Seller"
              checked={type === "Seller"}
              onChange={onOptionChangeType}
            />
            <label className={styles.title}>Seller</label>
          </div>
        </div>
        <br></br>

        <div className={styles.inputcontainer}>
          <label className={styles.title}>Complete Name </label>
          <input
            
            placeholder="Complete Name"
            type="text"
            name="name"
            value={name}
            id ='name'
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorcontainer}>
          {nameError && <div className={styles.error}>{nameError}</div>}
        </div>

        <div className={styles.inputcontainer}>
          <label className={styles.title}>Store Name (if applicable)</label>
          <input
            className={styles.input}
            placeholder="Store Name"
            name="store"
            type="text"
            value={store}
            onChange={handleChange}
          />
        </div>

        <div className={styles.errorcontainer}>
          {" "}
          {storeError && <div className={styles.error}>{storeError}</div>}{" "}
        </div>

        <div className={styles.inputcontainer}>
          <label className={styles.title}>Contact Number:</label>
          <input
            className={styles.input}
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorcontainer}>
          {" "}
          {phoneError && <div className={styles.error}>{phoneError}</div>}{" "}
        </div>

        <div className={styles.inputcontainer}>
          <label className={styles.title}>Email:</label>
          <input
            className={styles.input}
            placeholder="Enter your email address"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorcontainer}>
          {" "}
          {emailError && <div className={styles.error}>{emailError}</div>}
        </div>

        {type === "Buyer" ? (
          <div className="flex flex-col w-full gap-3 mb-5">
          <label className={styles.title}>Concern/s</label>
          <select
            className="placeholder-grey-300 border-[1px] h-[40px] font-Roboto text-[16px] text-[grey]  border-h2h-100  outline-1 outline-h2h-50 rounded-lg p-2"
            onChange={selectConcern}
            value={typeConcern}
           
          >
              <option
              className="font-Roboto text-[16px] text-[grey] "
              value=""
              hidden
              selected
              disabled
            >
              Select your concerns
            </option>
            <option value="product and description">Product Description</option>
            <option value="store information">Store Information</option>
            <option value="warranty">Warranty</option>
            <option value="about shipment">About Shipment</option>
            <option value="about the order">About the Order</option>
            <option value="returns and refunds">Returns and Refunds</option>
            <option value="about cancellation">About Cancellation</option>
            <option value="about my account">About My Account</option>
            <option value="other concerns">Other Concerns</option>
          </select>

          {errorValueConcern ? (
            <p className={styles.error}>This field is required</p>
          ) : (
            <p className="invisible">This field is required</p>
          )}
        </div>
        ) : (
          ""
        )}

        {type === "Seller"? (
          <div className="flex flex-col w-full gap-3 mb-5">
            <label className={styles.title}>Concern/s</label>
            <select
              className="placeholder-grey-300 border-[1px] h-[40px] font-Roboto text-[16px] text-[grey]  border-h2h-100  outline-1 outline-h2h-50 rounded-lg p-2"
              onChange={selectConcern}
              value={typeConcern}
             
            >
            <option
               className="font-Roboto text-[16px] text-[grey] "
              value=""
              hidden
              selected
              disabled
            >
              Select your concerns
            </option>
           
              <option value="about my account">About My Account</option>
              <option value="about the process">About the Process</option>
              <option value="about the packaging">About the Packaging</option>
              <option value="claims and payment">Claims and Payment</option>
              <option value="about the order">About the Order</option>
              <option value="returns and refunds">Returns and Refunds</option>
              <option value="other concerns">Other Concerns</option>
            </select>


            {errorValueConcern ? (
              <p className={styles.error}>This field is required</p>
            ) : (
              <p className="invisible">This field is required</p>
            )}


          </div>
        ) : (
          ""
        )}



        <div className={styles.inputcontainer}>
          <label>Comments:</label>
          <textarea
            className={styles.textarea}
            name="comments"
            value={comments}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorcontainer}>
          {" "}
          {commentsError && <div className={styles.error}>{commentsError}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Home;
