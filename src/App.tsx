import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutPage } from "./About/About";
import { ExperiencePage } from "./Experience/Experience";
import { HomePage } from "./HomePage/HomePage";
import { ContactPage } from "./Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Experience" element={<ExperiencePage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
