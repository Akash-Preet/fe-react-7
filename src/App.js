import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <div>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
