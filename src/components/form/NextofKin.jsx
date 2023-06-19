import React, { useEffect, useState } from "react";
import { LoginButton } from "../button/Button";
import FormHeader from "../header/FormHeader";
import Errors from "../../errors/Errors";
import CustomInputs from "../inputs/CustomInputs";
import CustomSelect from "../select/CustomSelect";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "../popup/PopUp";


const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const NextofKin = () => {
  const initialFormData = {
    firstname: "",
    lastname: "",
    middlename: "",
    gender: "",
    email: "",
    phonenumber: "",
    state: "",
    country: "",
    relationship: "",
  };
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState(formData);
  const [showPopUp, setShowPopUp] = useState(false);
  
  const handleInput = (e) => {
    const {name,value} =  e.target;
    setFormData({...formData, [name] :value})
  };

  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Errors(formData))
    
  }
  useEffect(() =>{
    if (Object.keys(errors).length === 0) {
      console.log('no errors')
      setShowPopUp(true)
    }else{
      console.log(errors)
    }
  },[errors])

  return (
    <div>
      <div className="container">
        <div className="full-form">
          <form action="" onSubmit={handleValidation}>
            <FormHeader text={"Information for Next of Kin"} />
            <div className="doubleInputs">
              <div>
                <CustomInputs
                  label={"First Name"}
                  name={"firstname"}
                  type={"text"}
                  onChange={handleInput}
                />
                {errors.firstname && <p>{errors.firstname}</p>}
              </div>
              <div>
                <CustomInputs
                  label={"Last Name"}
                  name={"lastname"}
                  type={"text"}
                  onChange={handleInput}
                />
                {errors.lastname && <p>{errors.lastname}</p>}
              </div>
            </div>
            <div className="doubleInputs">
              <div>
                <CustomInputs
                  label={"Middle Name"}
                  name={"middlename"}
                  type={"text"}
                  onChange={handleInput}
                />
                {errors.middlename && <p>{errors.middlename}</p>}
              </div>
              <div>
                <CustomSelect
                  label={"Gender"}
                  name={"gender"}
                  type={"text"}
                  options={gender}
                />
              </div>
            </div>
            <CustomInputs
              label={"Email"}
              name={"email"}
              type={"email"}
              onChange={handleInput}
            />
            {errors.email && <p>{errors.email}</p>}
            <CustomInputs
              label={"Phone Number"}
              name={"phonenumber"}
              type={"text"}
              onChange={handleInput}
            />
            {errors.phonenumber && <p>{errors.phonenumber}</p>}
            <CustomInputs
              label={"Relationship"}
              name={"relationship"}
              type={"text"}
              onChange={handleInput}
            />
            {errors.relationship && <p>{errors.relationship}</p>}
            <div className="doubleInputs">
              <div>
                <CustomInputs
                  label={"State of Origin"}
                  name={"state"}
                  type={"text"}
                  onChange={handleInput}
                />
                {errors.state && <p>{errors.state}</p>}
              </div>
              <div>
                <CustomInputs
                  label={"Nationality"}
                  name={"country"}
                  type={"text"}
                  onChange={handleInput}
                />
                {errors.country && <p>{errors.country}</p>}
              </div>
            </div>
            <LoginButton  text={"Login"} background={"#0062AA"} />
          </form>
        </div>
      </div>
      {showPopUp? <PopUp />: null}
    </div>
  );
};

export default NextofKin;
