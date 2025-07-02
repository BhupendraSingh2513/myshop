import React from "react";

export const Menu = () => {
  const data = [
    { name: "Home", link: "./home" },
    { name: "About", link: "./about" },
    { name: "Contact", link: "./contact" },
    { name: "Services", link: "./services" },
  ];

  return (
    <ul style={{ listStyleType: "none", display: "flex", gap: "30px" }}>
      {data.map((item, index) => (
        <li>
          <a
            href={item.link}
            style={{ padding: "10px", color: "black", textDecoration: "none" }}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
