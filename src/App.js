import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/Search";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search/:query' element={<SearchPage />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
