import React from "react";
import { Route, Routes } from "react-router-dom";

import Form from "../Form";
import { DisplayContent } from "../../pages/DisplayContent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/displaycontent" element={<DisplayContent />} />
    </Routes>
  );
};

export default App;
