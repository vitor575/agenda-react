import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contatos from "./pages/Contatos";
import Header from "./components/Header";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App () {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Contatos />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
