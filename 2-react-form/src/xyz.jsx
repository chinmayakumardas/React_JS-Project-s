
import "./App.css";

import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification:"",
  });
  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(" printing the value of form data");
  }

  return (
    <div className=" flex  justify-center items-center   w-full   h-screen py-[10px]">
      <form className=" flex flex-col" onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="outline"
          name="firstName"
          placeholder="Chinmaya"
          id="firstName"
          onChange={changeHandler}
          value={formData.firstName}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="outline"
          placeholder="Das"
          id="lastName"
          onChange={changeHandler}
          value={formData.lastName}
        ></input>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name=""
          className="outline"
          placeholder="chinmayakumar@gmail.com"
          id="email"
          onChange={changeHandler}
          value={formData.email}
        ></input>
        <label htmlFor="country">Country</label>
        <select
          className="outline"
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option>USA</option>
          <option>India</option>
          <option>china</option>
          <option>Pakistan</option>
        </select>
        <label htmlFor="street">Street Address</label>
        <input
          type="text"
          className="outline"
          name="street"
          placeholder="Patia,Kanan Vihar"
          id="street"
          onChange={changeHandler}
          value={formData.street}
        ></input>
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="outline"
          name="city"
          placeholder="Bhubaneswar"
          id="street"
          onChange={changeHandler}
          value={formData.city}
        ></input>
        <label htmlFor="state">State/Provinance</label>
        <input
          type="text"
          className="outline"
          name="state"
          placeholder="Odisha"
          id="state"
          onChange={changeHandler}
          value={formData.state}
        ></input>
        <label htmlFor="zip">Zip/Pincode</label>
        <input
          type="text"
          className="outline"
          name="zip"
          placeholder="751024"
          id="zip"
          onChange={changeHandler}
          value={formData.zip}
        ></input>
        <fieldset>
          <legend>By Email</legend>
          <div className="flex gap-2">
            <input
              id="comments"
              type="checkbox"
              name="comments"
              onChange={changeHandler}
              checked={formData.comments}
            ></input>
            <div className="mt-5">
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone's comments on post.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <input
              id="candidates"
              type="checkbox"
              name="candidates"
              onChange={changeHandler}
              checked={formData.candidates}
            ></input>
            <div className="mt-5">
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when when candidates applies for job.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <input
              id="offers"
              type="checkbox"
              name="offers"
              onChange={changeHandler}
              checked={formData.offers}
            ></input>
            <div className="mt-5">
              <label htmlFor="offers">Offers</label>
              <p>Get notified new Offers.</p>
            </div>
          </div>
        </fieldset>
        <br/>
        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler}></input>
          <label htmlFor="pushEverything">Everything</label><br/>
          <input type="radio" id="pushEmail" name="pushNotification" value="Same as Email" onChange={changeHandler}></input>
          <label htmlFor="pushEmail">Same as Email</label><br/>
          <input type="radio" id="pushNothing" name="pushNotification" value="No push Notifications" onChange={changeHandler}></input>
          <label htmlFor="pushNothing">No push Notification</label>
          
        </fieldset>

        <button className="bg-blue-500 text-white rounder font-bold py-2 px-4">Save</button>
      </form>

    </div>
  );
}

export default App;
