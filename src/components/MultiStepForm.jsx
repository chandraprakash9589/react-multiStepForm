import React, { useState } from "react";
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

  const handleStep2Next = (selectedProducts, products) => {
    setSelectedProducts(selectedProducts);
    setProducts(products);
  };
  const handleFormSubmit = () => {
    const selectedProductsData = selectedProducts.map((productId) => {
      const product = products.find((p) => p.id === productId);
      return { id: productId, title: product.title };
    });
    console.log("Form submitted:", formData, selectedProductsData);
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
