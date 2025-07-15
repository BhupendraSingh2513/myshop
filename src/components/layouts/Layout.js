import React from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 flex items-center">
        <Link to="/" className="text-white mr-4">
          Home
        </Link>
        <Link to="/contact" className="text-white">
          Contact{" "}
        </Link>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} My Application
      </footer>
    </div>
  );
};
