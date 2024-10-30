import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./redux/store";
import Home from "./pages";
import Error from "./pages/Error";
import Article from "./pages/Article";
import { Provider } from "react-redux";
import { homeLoader } from "./loaders/homeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
    errorElement: <Error />,
  },
  {
    path: "articles/:articleId",
    element: <Article />,
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
