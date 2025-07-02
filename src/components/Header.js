import React from "react";
import { Menu } from "./Menu";
function Header() {
    return (
        <div style={{ display: "flex"}}>
            <div style={{padding: "10px", paddingRight: "620px", backgroundColor: "white", color: "white" }}>
                <img src = "logo.png" alt = "Logo" style = {{width: "200px"}} />
            </div>
            <div style={{justifyContent: "space-around", padding: "20px", backgroundColor: "white", color: "black" }}>
                    <Menu />  
            </div>
        </div>
    )
}
export default Header;