import React from "react";
import Nav from './Nav'
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Nav/>
      <h1>Hi ,This is Linkdin</h1>
      <Login/>
      <div className="app_body">
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
