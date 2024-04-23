import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import PersonalInfo from "./components/PersonalInfo";
import ProductList from "./components/ProductList";
import SubmitForm from "./components/SubmitForm";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/submitForm" element={<SubmitForm />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}
export default App;
