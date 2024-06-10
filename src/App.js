import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Coimbra" />

        <footer>
          This project was coded by {""}
          <a
            href="https://github.com/Danielafsp"
            target="_blank"
            rel="noreferrer"
          >
            Daniela Pereira
          </a>
          , open-sourced on {""}
          <a
            href="https://github.com/Danielafsp/Weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
