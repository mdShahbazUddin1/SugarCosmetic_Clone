import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AccountOrder from "./pages/AccountOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/account/order" element={<AccountOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
