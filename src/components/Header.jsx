/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import AppWrapper from "../wrapper/Appwrapper";

function Header({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}

export default AppWrapper(Header, "header");
