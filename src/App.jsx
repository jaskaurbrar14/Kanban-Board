import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kanban from "./Components/Kanban/Kanban";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kanban />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
