
eshop project helps the full stack developers 
import React, { useEffect, useState } from "react";
import data from "./Fake";
import axios from "axios";
  
const Products = () => {
  const [res, resState] = useState([]);
   
  const productApi = async () => {
    try {
      const response = await axios.get(`http://localhost:4000`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      resState(response.data);  // Setting the API data
    } catch (error) {  
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    productApi();
  }, []);

  return (
    <div className="products">
      {/* Mapping through static data */}
      {data.map((item) => (
        <div key={item.id} className="users">
          <div className="card">{item.Name}</div>
          <div className="card">{item.Age}</div>
          <div className="card">{item.work}</div>
        </div>
      ))}

      {/* Mapping through the fetched API data */}
      {res.length > 0 && res.map((item, index) => (
        <div key={index} className="users">
          <div className="card">{item.Name}</div>
          <div className="card">{item.Age}</div>
          <div className="card">{item.work}</div>
        </div>
      ))}
    </div>
  );   
};

export default Products;

/// in this code use the fetching not axios 












