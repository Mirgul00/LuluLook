import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import ProductId from "./pages/ProductId";

export const router = createBrowserRouter([
    {
        id: 'Base',
        path: "/",
        element: <MainPage />
    },
    {
        id: 'Catalog',
        path: "/catalog",
        element: <Catalog />
    },
    {
        id: 'Product',
        path: '/product/id',
        element: <ProductId />
    }
]);