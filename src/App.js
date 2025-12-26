import "./pages/contact";
import { Route, Routes } from "react-router-dom";
import Header from "./constants/header";
import Footer from "./constants/footer";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
