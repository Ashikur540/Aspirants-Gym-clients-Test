import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Header from "../shared/Header";


const Main = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;