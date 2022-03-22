import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
