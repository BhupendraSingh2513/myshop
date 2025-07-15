import React from "react";
import { Layout } from "../components/layouts/Layout";

export const Home = ({ children }) => {
  return (
    <Layout>
        <div>
           <h1>Home Page</h1>
           <p>Welcome to the home page!</p> 
        </div>
    </Layout>
  );
};
