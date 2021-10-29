import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import Register from "./components/Register";

import {
  Home,
  SingleProduct,
  Cart,
  Error,
  About,
  Products,
  Article,
  RegisterPage,
  LoginPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/VeChungToi">
          <About />
        </Route>
        <Route exact path="/GioHang">
          <Cart />
        </Route>
        <Route exact path="/SanPham">
          <Products />
        </Route>
        <Route exact path="/BaiDanhGia">
          <Article />
        </Route>
        <Route exact path="/DangKy">
          <RegisterPage />
        </Route>
        <Route exact path="/DangNhap">
          <LoginPage />
        </Route>
        <Route exact path="/SanPham/:id" children={<SingleProduct />} />
        {/* <Route exact path="/ThanhToan">
          <Checkout />
        </Route> */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
