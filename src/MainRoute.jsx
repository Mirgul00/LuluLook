import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import ProductId from "./pages/ProductId";
import Login from "./pages/Login"
// import Menu from "./pages/Menu"
import Basket from "./pages/Basket";


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
    },
    {
        id:'Login',
        path: '/login',
        element: <Login />
    },
    // {
    //     id:'Menu',
    //     path:'/menu',
    //     element: <Menu />
    // },
    {
        id: 'Basket',
        path: '/basket',
        element: <Basket />
    },
    
]);
