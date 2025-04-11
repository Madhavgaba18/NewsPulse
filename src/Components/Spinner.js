import React from "react";
import loading from "./Loading.gif.gif";

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <img className="my-3" src={loading} alt={loading}></img>
    </div>
  );
};

export default Spinner;
