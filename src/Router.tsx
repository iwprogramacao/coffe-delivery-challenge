import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Delivery } from "./pages/Delivery";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/delivery"
          element={<Delivery />}
        />
      </Route>
    </Routes>
  );
}
