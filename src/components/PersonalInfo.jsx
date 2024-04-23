import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  setErrors,
  selectPersonalInfo,
} from "../redux/reducers/personalInfoSlice.js";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
  const { formData, errors } = useSelector(selectPersonalInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.dob.trim()) {
      newErrors.dob = "Date of birth is required";
    }
    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      navigate("/productlist");
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Personal Information</h2>
      <Stack spacing={2} sx={{ width: "300px" }}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        <TextField
          label="Date of Birth"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          error={!!errors.dob}
          helperText={errors.dob}
        />
      </Stack>
      <Button
        variant="contained"
        onClick={handleNext}
        sx={{ width: "300px", mt: 2 }}
      >
        Next
      </Button>
    </div>
  );
}

export default PersonalInfo;
