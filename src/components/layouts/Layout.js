import React,{children} from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({children}) => {
    return(
       <>
       <Header />
       <br/>
       <br/>

        <main>{children}</main>    
       <br/>
       <br/>
       <Footer />
       </>
    )
}

