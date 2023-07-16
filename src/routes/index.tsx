import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Books from "../Pages/Books";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import BookDetails from "../Pages/BookDetails";
import WishList from "../Pages/WishList";
import AddNewBook from "../Pages/AddNewBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/books", element: <Books /> },
      { path: "/book/:id", element: <BookDetails /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/add-new-book", element: <AddNewBook /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

export default routes;
