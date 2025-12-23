import "./pages/contact";
import { Route, Routes } from "react-router-dom";
import Header from "./constants/header";
import ContactPage from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
