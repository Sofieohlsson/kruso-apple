import React from "react";
import Header from "./layout/Header";
import Home from "./pages/Home"; 

export default function App() {
  return (
    <div className="font-sans mt-12">
      <Header />
      <Home />
    </div>
  );
}
