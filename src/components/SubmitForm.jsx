import React from "react";
import {
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectPersonalInfo } from "../redux/reducers/personalInfoSlice.js.js";
import { selectProduct } from "../redux/reducers/productSlice.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubmitForm() {
  const { formData } = useSelector(selectPersonalInfo);
  const { selectedProducts, products } = useSelector(selectProduct);
  const navigate = useNavigate();

  const selectedProductsData = selectedProducts.map((productId) => {
    const product = products.find((p) => p.id === productId);
    return { id: productId, title: product.title };
  });
  const handleSubmit = () => {
    toast("Task submitted successfully");
    setTimeout(() => {
      navigate("/");
    }, 3000);
    console.log("Form submitted:", formData, selectedProductsData);
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "40px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ToastContainer />
      <Typography variant="h5" gutterBottom style={{ marginBottom: "20px" }}>
        Review Your Choices
      </Typography>
      <Typography gutterBottom>
        <strong>Name:</strong> {formData.firstName} {formData.lastName}
      </Typography>
      <Typography gutterBottom>
        <strong>Date of Birth:</strong> {formData.dob}
      </Typography>
      <Typography gutterBottom style={{ marginBottom: "10px" }}>
        <strong>Selected Products:</strong>
      </Typography>
      <List>
        {selectedProductsData.map((productData) => (
          <ListItem key={productData.id} style={{ marginBottom: "10px" }}>
            <ListItemText
              primary={
                <React.Fragment>
                  <strong>Product Name:</strong> {productData.title},{" "}
                  <strong>ID:</strong> {productData.id}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          backgroundColor: "#4caf50",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Submit
      </Button>
    </Paper>
  );
}

export default SubmitForm;
