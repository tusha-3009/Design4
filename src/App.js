import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SecondPage from "./SecondPage/SecondPage";
import Header from "./FirstPage/Header/Header";
import Main from "./FirstPage/Main/Main";
import About from "./FirstPage/Header/About";
import Blog from "./FirstPage/Header/Blog";
import Contact from "./FirstPage/Header/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Main />
              <SecondPage />
            </>
          }
        ></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
