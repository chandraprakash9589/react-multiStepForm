import { createSlice } from "@reduxjs/toolkit";

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState: {
    formData: {
      firstName: "",
      lastName: "",
      dob: "",
    },
    errors: {},
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setFormData, setErrors } = personalInfoSlice.actions;

export const selectPersonalInfo = (state) => state.personalInfo;

export default personalInfoSlice.reducer;
