import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero, Header, About, Footer } from "./components";
import Memo from "./Memo";
import Callback from "./Callback";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Footer />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
