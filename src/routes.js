import Home from "./Pages/home/Home";
import UserList from "./Pages/Users/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import Products from "./Pages/Products/Products";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/user/:userID", element: <User /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/newproduct", element: <NewProduct /> },
  { path: "/product/:productID", element: <Product /> },
];

export default routes;
