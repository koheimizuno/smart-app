import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "pages/Layout";
import Home from "pages/Home";
import NoPage from "pages/NoPage";
import "./App.css";
import Teletubbies from "pages/Teletubbies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/teletubbies" element={<Teletubbies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
