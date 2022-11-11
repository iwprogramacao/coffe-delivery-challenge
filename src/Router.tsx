import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Cart } from "./pages/Cart";
import { Delivery } from "./pages/Delivery";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
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
