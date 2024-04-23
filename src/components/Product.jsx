import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
function ProductList({ formData, onNext }) {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const mappedProducts = data?.products?.map((product) => ({
          id: product.id,
          title: product.title,
        }));
        setProducts(mappedProducts);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSelection = (productId) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      const updatedSelection = selectedProducts.filter(
        (id) => id !== productId
      );
      setSelectedProducts(updatedSelection);
    }
  };

  const handleNext = () => {
    onNext(selectedProducts, products);
    navigate("/submitForm");
  };

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
