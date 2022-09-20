import React, { useState } from "react";
import Result from "../Result/Result";
import "./Covid.css";
function Covid() {
  const [Country, setCountry] = useState("");
  const [result, setResult] = useState({});
  const fetchData = () => {
    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${Country}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("result", data);
        setResult(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(result);
  return (
    <div id="box">
      <input
        type="text"
        placeholder="Enter the country name"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      ></input>
      <button onClick={fetchData}>Search</button>
      {Object.keys(result).length && <Result data={result}></Result>}
    </div>
  );
}
export default Covid;
