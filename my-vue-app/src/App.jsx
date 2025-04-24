import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddProducts,
  Navbar,
  Contact,
  Products,
  Store,
  Search,
} from "./combineRoute";
import Delete from "./components/Delete";
// import Update from "./components/Update";
import Posting from "./components/Posting";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true,element:<Home/>},
      { path: "store", element: <Store /> },
      { path: "products", element: <Products /> },
      { path: "AddProduct", element: <AddProducts /> },
      { path: "contact", element: <Contact /> },
      { path: "Search", element: <Search /> },
      { path: "delete", element: <Delete /> },
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },

      { path: "posting", element: <Posting /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
