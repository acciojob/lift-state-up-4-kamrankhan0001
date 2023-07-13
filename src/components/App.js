
import React, { useState } from "react";
import './../styles/App.css';

//import React, { useState } from "react";

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

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const addItem = () => {
    if (itemName !== "" && itemPrice !== "") {
      const newItem = { name: itemName, price: Number(itemPrice) };
      setCartItems([...cartItems, newItem]);
      setItemName("");
      setItemPrice("");
    }
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent cartItems={cartItems} removeItem={removeItem} />
      <div>
        <input
          type="text"
          
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
         
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
};

export default ParentComponent;
