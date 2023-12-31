import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const MainLayout = () => {
    return (
        <div className="relative">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default MainLayout;