import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
