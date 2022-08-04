import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import RoomsPage from "./components/rooms/RoomsPage";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Faq from "./components/faq/Faq";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBagShopping,
  faArrowRightToBracket,
  faLock,
  faUsers,
  faHourglassHalf,
  faBox,
  faMapLocationDot,
  faPhone,
  faAt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import ScrollToTop from "./ScrollToTop";

library.add(
  faBagShopping,
  faArrowRightToBracket,
  faLock,
  faUsers,
  faHourglassHalf,
  faBox,
  faMapLocationDot,
  faPhone,
  faAt,
  faBars
);

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/faq" element={<Faq query="/faq" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
