// import React from 'react';
// import { useState } from 'react';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Component/Header";
// import AboutUS from "./pages/Component/AboutUS";
// import ContactUS from "./pages/Component/ContactUS";
import Footer from "./pages/Component/Footer";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
    </>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Header />}>
    //       <Route path="about" element={<AboutUS />} />
    //       <Route path="contact" element={<ContactUS />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
