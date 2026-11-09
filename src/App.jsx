import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ModeProvider } from "./ModeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Parcours from "./pages/Parcours.jsx";
import Projets from "./pages/Projets.jsx";
import Experiences from "./pages/Experiences.jsx";
import Certifications from "./pages/Certifications.jsx";
import Associatif from "./pages/Associatif.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Article from "./pages/Article.jsx";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ModeProvider>
      <div className="bg-orbs" aria-hidden="true">
        <i /><i /><i />
      </div>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/vie-associative" element={<Associatif />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Touria Chiguer · Élève ingénieure Génie Informatique & IA · ENSA Safi
      </footer>
    </ModeProvider>
  );
}