import { Outlet } from "react-router-dom";
import Header from "../composants/Header.jsx";
import Footer from "../composants/Footer.jsx";

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}