import React from "react";
// Page Styling and Bootstrap Import
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Page components import
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Components Imports

function App() {
  return (
    <div className="App">
      {/* MAIN PAGE LAYOUT */}
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
