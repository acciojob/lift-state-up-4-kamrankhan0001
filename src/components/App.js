
import React, { useState } from "react";
import './../styles/App.css';

//import React, { useState } from "react";

// Child component to display the list of items
const ChildComponent = ({ cartItems, removeItem }) => {
  return (
    <div className="child">
      
  
      <h2>Child Component</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span id="itemName">{item.name}</span>
            <span id="itemPrice">{item.price}</span>
            <button onClick={() => removeItem(index)}>Remove</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

// Parent component
const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ]);

  // Function to remove an item from cart
  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };


  const addItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <label>Item name:</label>
      <input type="text"></input>
      <label>Item Price:</label>
      <input type="number"></input>
       <button onClick={() => addItem(index)}>AddItem</button>
      <ChildComponent cartItems={cartItems} removeItem={removeItem} />
    </div>
  );
};

export default ParentComponent;
