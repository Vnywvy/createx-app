import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Footer from "./components/footer/Footer";
import Service from "./pages/Service";
import Positions from "./pages/Positions";
import NewsIndex from "./pages/NewsIndex";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/:serviceId" element={<Service />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/news/:newsId" element={<NewsIndex />} />
        <Route path="/work/:projectId" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
