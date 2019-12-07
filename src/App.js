import React from "react";
import Header from "./components/layout/Header";
import Photogallery from "./components/pages/Photogallery";
import "./App.css";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Photogallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
