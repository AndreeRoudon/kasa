import {createBrowserRouter} from "react-router-dom";
import Root from "./root.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Logement from "../pages/Logement.jsx";
import Error404 from "../pages/Error404.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/logement/:id",
                element: <Logement/>,
            },
            {
                path: "/*",
                element: <Error404/>,
            },
        ]
    }
]);

export default router;