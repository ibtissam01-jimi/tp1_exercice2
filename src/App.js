import React from "react";
import Header from "./components/Header/header.jsx";
import Navigation from "./components/Navigation/navigation.jsx";
import Footer from "./components/Footer/footer.jsx";
import Profil from "./components/Content/profil.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Profil />
      <Footer />
    </div>
  );
}

export default App;
