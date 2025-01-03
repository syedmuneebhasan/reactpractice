import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero, Header, About, Footer } from "./components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/muneeb" element={<About />} />
          <Route path="/contact-us" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
