import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./utils/ScrollToTop";
import Canvas from "../src/canvas/Canvas";
import Mouse from "./components/Mouse";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, []);

  const location = useLocation();

  if (isLoading) return <div className="loader">Loading...</div>;

  return (
    <div className="body">
      <ScrollToTop />
      <Mouse />
      <Header />
      <Canvas />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
