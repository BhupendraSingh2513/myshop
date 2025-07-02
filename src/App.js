import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Headings from "./components/Headings";
import Card2 from "./components/Card2"; 
import Header from "./components/Header";

function App({ title }) {
  const data = [
    {
      name: "EARBUDS",
      price: 100,
      mrp: 150,
      img: logo,
    },
    {
      name: "HEADPHONES",
      price: 200,
      mrp: 250,
      img: logo,
    },
    {
      name: "SMART WATCH",
      price: 150,
      mrp: 200,
      img: logo,
    },
  ];

  return (
    <>
      <header className="App-header">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title}</p>
        <div className="product-list">
        </div>
        <Headings />
         <Card2 />
         {data.map((item, index) => (
            <Card key={`card-${index}`} data={item} />
          ))}
      </header>
      <footer className="App-footer">
        <p>Footer Content</p>
      </footer>
    </>
  );
}

export default App;
