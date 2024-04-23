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
        maxWidth: "500px",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <ToastContainer />
      <Typography variant="h5" gutterBottom>
        Review Your Choices
      </Typography>
      <Typography gutterBottom>
        Name: {formData.firstName} {formData.lastName}
      </Typography>
      <Typography gutterBottom>Date of Birth: {formData.dob}</Typography>
      <Typography gutterBottom>Selected Products:</Typography>
      <List>
        {selectedProducts?.map((productId) => {
          const product = products?.find((p) => p.id === productId);
          return (
            <ListItem key={productId}>
              <ListItemText
                primary={`Product Name: ${product?.name}, ID: ${productId}`}
              />
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ marginTop: "20px" }}
      >
        Submit
      </Button>
    </Paper>
  );
}

export default SubmitForm;
