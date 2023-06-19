import React, { useEffect, useState } from "react";
import Errors from "../../errors/Errors";
import { LoginButton } from "../button/Button";
import FormHeader from "../header/FormHeader";
import CustomInputs from "../inputs/CustomInputs";
import CustomSelect from "../select/CustomSelect";
import { BsUnlock, BsLock } from "react-icons/bs";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const PersonalLogin = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
 
  const initialFormData = {
    firstname: "",
    lastname: "",
    middlename: "",
    gender: "",
    email: "",
    phonenumber: "",
    password: "",
    state: "",
    country: "",
    localgovernment: "",
    dateofbirth: "",
    startWork: "",
  };
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState(formData);

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
      navigate('/nextdetails')
    }else{
      console.log(errors)
    }
  },[errors])

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="full-form">
        <form action="" onSubmit={handleValidation}>
          <FormHeader text={"Your Information"} />
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
                name={"middlename"}
                label={"Middle Name"}
                type={"text"}
                onChange={handleInput}
              />

              {errors.middlename && <p>{errors.middlename}</p>}
            </div>

            <div>
              <CustomSelect
                label={"Gender"}
                name={"gender"}
                onChange={onchange}
                options={gender}
                placeholder={"Select"}
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
            type={"number"}
            name={"phonenumber"}
            onChange={handleInput}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}

          <div>
            <CustomInputs
              label={"Password"}
              type={showPassword ? "text" : "password"}
              name={"password"}
              onChange={handleInput}
              icon={showPassword ? <BsLock /> : <BsUnlock />}
              onClick={handleShowPassword}
            />
            {/* <div onClick={handleShowPassword}>
              {showPassword ? <BsLock /> : <BsUnlock />}
            </div> */}
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="doubleInputs">
            <div>
              <CustomInputs
                label={"State of Origin"}
                type={"text"}
                onChange={handleInput}
              />
            </div>
            <div>
              <CustomInputs
                label={"Nationality"}
                type={"text"}
                name={"country"}
                onChange={handleInput}
              />
              {errors.country && <p>{errors.country}</p>}
            </div>
          </div>

          <div className="doubleInputs">
            <div>
              <CustomInputs
                label={"Local Government"}
                type={"text"}
                onChange={handleInput}
              />
            </div>
            <div>
              <CustomInputs
                label={"Date of Birth"}
                type={"date"}
                name={"dateofbirth"}
                onChange={handleInput}
              />
              {errors.dateofbirth && <p>{errors.dateofbirth}</p>}
            </div>
          </div>
          <CustomInputs
            label={"Start of Work"}
            type={"date"}
            name={"startWork"}
            onChange={handleInput}
          />

          {errors.startWork && <p>{errors.startWork}</p>}
            <LoginButton  text={"Login"} color={"#fff"} background={"#0062AA"} />
        </form>
      </div>
    </div>
  );
};

export default PersonalLogin;
