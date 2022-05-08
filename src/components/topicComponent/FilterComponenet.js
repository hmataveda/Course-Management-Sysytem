import React from "react";
// import '../Styles/Filter.css'


function FiterComponenet (){
    return (
        <div >
        <select className="custom-select custom-select-lg mb-3 float-right">
        <option selected>Filter By</option>
        <option value="1">Date</option>
        <option value="2">Video</option>
        <option value="3">PDF</option>
      </select>
      </div>
    )
}

export default FiterComponenet;