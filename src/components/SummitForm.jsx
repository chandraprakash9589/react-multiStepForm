import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubmitForm({ formData, selectedProducts, onSubmit, products }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    toast("Task submitted successfully");
    setTimeout(() => {
      onSubmit();
      navigate("/");
    }, 3000);
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
        {selectedProducts?.map((productId) => {
          const product = products?.find((p) => p.id === productId);
          return (
            <ListItem key={productId} style={{ marginBottom: "10px" }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Product Name:</strong> {product?.title},{" "}
                    <strong>ID:</strong> {productId}
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
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
