import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import ProductList from "./Product";
import SubmitForm from "./SummitForm";


const MultiStepForm = () => {
  const [formData, setFormData] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const handleStep1Next = (data) => {
    setFormData(data);
  };

  const handleStep2Next = (selectedProducts, products) => { // Receive products from Step2
    setSelectedProducts(selectedProducts);
    setProducts(products); // Set products state
  };

  const handleFormSubmit = () => {
    console.log("Form submitted:", formData, selectedProducts);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInfo onNext={handleStep1Next} />} />
        <Route
          path="/productlist"
          element={<ProductList formData={formData} onNext={handleStep2Next} />}
        />
        <Route
          path="/submitForm"
          element={
            <SubmitForm
              formData={formData}
              selectedProducts={selectedProducts}
              products={products} 
              onSubmit={handleFormSubmit}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default MultiStepForm;
