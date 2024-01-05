import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contacts from "./Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/contact/userId/1/sectionId/2/productId/3"
              replace={true}
            />
          }
        ></Route>
        <Route
          path="contact/userId/:userId/sectionId/:sectionId/productId/:productId"
          Component={Contacts}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
