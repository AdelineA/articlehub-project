import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./redux/store";
import Home from "./pages";
import Error from "./pages/Error";
import Article from "./pages/Article";
import { Provider } from "react-redux";
import { articlesLoader } from "./loaders/articles";
import NavBar from "./components/navBar";
// import { articleDetailLoader } from "./loaders/articleDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: articlesLoader,
    errorElement: <Error />,
  },
  {
    path: "articles/:articleId",
    element: <Article />,
    // loader: articleDetailLoader,
  },
]);
function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
