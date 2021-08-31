import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Canvas from "../src/canvas/Canvas";
import Mouse from "./components/Mouse";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, [isLoading]);

  return !isLoading ? (
    <div className="body">
      <Canvas />
      <Mouse />
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  ) : (
    <div className="loader">Loading...</div>
  );
}

export default App;
