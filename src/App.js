import "./pages/contact";
import { Route, Routes } from "react-router-dom";
import Header from "./constants/header";
import Footer from "./constants/footer";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ExegesisPage from "./pages/exegesis";
import DevWrapper from "./components/devWrapper";
import AboutPage from "./pages/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/exegesis" element={<ExegesisPage />} />
        <Route path="/exegesis/:slug" element={<DevWrapper />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
