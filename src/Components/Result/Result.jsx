import React from "react";

function Result({data}){
    console.log(data?.cases)
    return(
        <div className="resultbox">
            <h1>cases:{data?.cases}</h1>
            <h1>Total_cases:{data?.todayCases}</h1>
            <h1>Death_cases:{data?.deaths}</h1>
            <h1>Recovered:{data?.recovered}</h1>
        </div>
    )
}
export default Result;