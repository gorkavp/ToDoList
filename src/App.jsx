import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ToDoList from "./pages/ToDoList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <section className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<ToDoList />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
