import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-600 text-white px-2 py-2">
      <Navbar/>
      <AppRoutes />
    </div>
  );
}

export default App;
