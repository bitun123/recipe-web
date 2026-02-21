import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Create from "./components/Create";

function App() {
  const [open, setopen] = useState(false);
  return (
    <div className="w-screen h-screen bg-gray-600 text-white px-2 py-2" 
    >
      <Navbar
        openModal={() => setopen(true)}
        closeModal={() => setopen(false)}
      />
      <AppRoutes />
      {open && <Create />}
    </div>
  );
}

export default App;
