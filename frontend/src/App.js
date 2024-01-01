import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AccountOrder from "./pages/AccountOrder";
import Order from "./pages/Order";
import Addresses from "./pages/Addresses";
import Wishlist from "./pages/Wishlist";
import Referral from "./pages/Referral";
// import Snowflake from "./components/Snowflake";
import Bag from "./pages/Bag";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Snowflake /> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/account/*" element={<AccountOrder />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/referral" element={<Referral />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
