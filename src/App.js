import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Homepage() {
  return <h2> Welcome to the Homepage </h2>;
}

function NewShopForm() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Name:" + event.target.shopName.value);
    console.log("Description:" + event.target.shopDescription.value);
    document.getElementById('NewShopForm').reset();
  };

  const handleCancel = () => {
    // Reset the form by accessing the form element and invoking reset
    document.getElementById('NewShopForm').reset();
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log('Image uploaded:', selectedFile.name);
    } else {
      console.log('No image selected');
    }
  };

  return (
    <div className="container">
      <h1>New Shop</h1>
      <div className="file-input-container">
      <input
        type="file"
        id="logo"
        name="logo"
        accept="image/*"
        className="file-input"
        onChange={handleFileUpload}
      /> 
      <label htmlFor="logo" className="custom-button">
        Upload Logo
      </label><br></br>
    </div>
      <form onSubmit={handleSubmit} id="NewShopForm">
        <input type="text" id="shopName" name="shopName" placeholder="Name" required/><br></br>
        <input type="text" id="shopDescription" name="shopDescription" placeholder="Description" required/>
        <br />
        
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

function NewProductForm() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Name:" + event.target.productName.value);
    console.log("Description:" + event.target.productDescription.value);
    console.log("Category:" + event.target.category.value);
    console.log("Quantity:" + event.target.quantity.value);
    console.log("Price:" + event.target.price.value);
    document.getElementById('NewShopForm').reset();
  };

  const handleCancel = () => {
    document.getElementById('NewProductForm').reset();
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log('Image uploaded:', selectedFile.name);
    } else {
      console.log('No image selected');
    }
  };

  return (
    <div className="container">
      <h1>New Product</h1>
      <div className="file-input-container">
      <input
        type="file"
        id="logo"
        name="logo"
        accept="image/*"
        className="file-input"
        onChange={handleFileUpload}
      /> 
      <label htmlFor="logo" className="custom-button">
        Upload Photo
      </label><br></br>
      </div>
      <form onSubmit={handleSubmit} id="NewProductForm">
        <input type="text" id="productName" name="productName" placeholder="Name" required /><br></br>
        <input type="text" id="productDescription" name="productDescription" placeholder="Description" required/><br></br>
        <input type="text" id="category" name="category" placeholder="Category" required /><br></br>
        <input type="text" id="quantity" name="quantity" placeholder="Quantity" required /><br></br>
        <input type="text" id="price" name="price" placeholder="Price" required />
        <br />
        
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Homepage</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/new-shop">New Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/new-product">New Product</a>
          </li>
        </ul>
      </div>
    </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-shop" element={<NewShopForm />} />
          <Route path="/new-product" element={<NewProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
