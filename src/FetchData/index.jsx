import { Router, Routes, Route } from "react-router-dom";

import AsyncAwait from "./usingAsyncAwait";

const FetchNew = () => {
  return (
    <Router>
      <Routes>
        <Route path="/asyncawait" element={AsyncAwait} />
      </Routes>
    </Router>
  );
};

export default FetchNew;
