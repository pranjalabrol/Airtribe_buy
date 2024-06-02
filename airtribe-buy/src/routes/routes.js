import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"; 

const router = createBrowserRouter([
    {
        path:"/products",
        element:<ProductsPage/>
    },
    {
        path:"/products/:productId",
        element:<HomePage/>  
    },
    {
        path:"/purchase",
        element:<PrivateRoute/>,
        children:[
            {
                path: "Cart",
                element: <CartPage/>
            },
            {
                path: "checkout",
                element: <CheckoutPage/>
            }
        ]  
    },
    {
        path:"/checkout",
        element:<CheckoutPage/>  
    }
])
export default router;