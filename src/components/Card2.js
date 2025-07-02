import React from "react";
function Card2 () {
    return(
        <div style={{border: "1px solid white", padding: "10px", margin: "10px", backgroundColor: "lightgray", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", textAlign: "center", fontFamily: "Arial, sans-serif", color: "black"}}>
            <img src = "img.jpg" alt = "Image Not Available" style = {{width: "500px"}} />
            <h3>Product Name</h3>
            <p>Price: $100</p>
        </div>
    )         
    }
export default Card2;