import React from "react";
import "./App.css";
import TextBlock from "./components/TextContent/TextBlock";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TextBlock />
      <Footer />
    </div>
  );
}

export default App;
