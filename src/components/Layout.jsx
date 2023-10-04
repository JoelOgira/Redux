import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="App min-h-[100dvh] scroll-smooth bg-black">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;