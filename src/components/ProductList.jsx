import React, { useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSelectedProducts,
  selectProduct,
} from "../redux/reducers/productSlice.js";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { products, selectedProducts, status, error } = useSelector(
    selectProduct
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleSelection = (productId) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      dispatch(setSelectedProducts([...selectedProducts, productId]));
    } else {
      const updatedSelection = selectedProducts.filter((id) => id !== productId);
      dispatch(setSelectedProducts(updatedSelection));
    }
  };

  const handleNext = () => {
    navigate("/submitForm");
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Typography variant="h5" gutterBottom>
        Choose Your Favorites
      </Typography>
      <List style={{ width: "300px" }}>
        {products?.map((product) => (
          <ListItem key={product.id}>
            <ListItemIcon>
              <Checkbox
                checked={selectedProducts.includes(product.id)}
                onChange={() => handleSelection(product.id)}
              />
            </ListItemIcon>
            <ListItemText primary={product.title} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={handleNext}
        style={{ width: "300px", marginTop: "16px" }}
      >
        Next
      </Button>
    </Box>
  );
}

export default ProductList;
