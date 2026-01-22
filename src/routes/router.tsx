import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import CustomizeDialog from "../pages/CustomizeDialog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { path: "products", element: <Products /> },
          { 
            path: "product/:productId", 
            element: <ProductDetail />,
            children: [
                {path: "customize", element: <CustomizeDialog />}
            ]
        },
          { path: "cart", element: <Cart /> },
        ],
      },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;