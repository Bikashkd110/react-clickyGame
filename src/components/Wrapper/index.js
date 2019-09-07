import React from "react";
import "./style.css";

const Wrapper = props => <div className= {props.shakeWrapper==="true" ? "wrapperShake" : "wrapper"}>{props.pictures}</div>;

export default Wrapper;
