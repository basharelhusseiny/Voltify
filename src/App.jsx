import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SearchModalProvider from "./context/SearchModalContext";
import MobileMenuProvider from "./context/MobileMenuContext";
import Register from "./pages/Register";
import SingleProductPage from "./pages/SingleProductPage";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/blog", element: <Blog /> },
        { path: "/AboutUs", element: <AboutUs /> },
        { path: "/contactUs", element: <ContactUs /> },
        { path: "/register", element: <Register /> },
        { path: "/register", element: <Register /> },
        { path: "/singleProductPage/:id", element: <SingleProductPage /> },
        { path: "/categoryPage/:categoryName", element: <CategoryPage /> },
      ],
    },
  ]);
  return (
    <>
      <SearchModalProvider>
        <MobileMenuProvider>
          <RouterProvider router={router} />
        </MobileMenuProvider>
      </SearchModalProvider>
    </>
  );
};

export default App;
