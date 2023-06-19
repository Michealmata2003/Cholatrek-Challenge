import React from "react";
import { Link } from "react-router-dom";
import {Button} from "../button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="wholebody">
      <div className="container">
        <div className="hero">
          <div>
            <h1>Would you like to go on a Form Tour ?</h1>
            <p>Click the button below and get started.</p>
            <Link to={'/login'}><Button  color= {'#0062AA' } text={"Get Started"} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
