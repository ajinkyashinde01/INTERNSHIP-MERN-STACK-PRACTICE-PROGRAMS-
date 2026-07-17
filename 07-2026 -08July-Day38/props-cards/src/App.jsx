import React from "react";
import Card from "./componants-/cart";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card
        image="https://tse2.mm.bing.net/th/id/OIP.iC21QavJ2nn-yVthYMCbbAHaE8?r=0&pid=Api&h=220&P=0"
        name="Laptop"
        description="A high-performance laptop for coding."
        buttonText="Shop Now"
      />

      <Card
        image="https://tse2.mm.bing.net/th/id/OIP.V6GUtMaj4KFq7mcKyjbafwHaHa?r=0&pid=Api&h=220&P=0"
        name="Mobile Phone"
        description="A latest-generation smartphone."
        buttonText="Shop Now"
      />

      <Card
        image="https://tse2.mm.bing.net/th/id/OIP.Uk3xpUiId9mo0Fl-KsJD2wHaHa?r=0&pid=Api&h=220&P=0"
        name="Headphones"
        description="Wireless noise-cancelling headphones."
        buttonText="Shop Now"
      />

        <Card
        image="https://tse3.mm.bing.net/th/id/OIP.wLnNmDeEywgfW4yr8goB8wHaIP?r=0&pid=Api&h=220&P=0"
        name="Smartwatch"
        description="A latest-generation smartwatch."
        buttonText="Shop Now"
      />
    </div>
  );
}

export default App;