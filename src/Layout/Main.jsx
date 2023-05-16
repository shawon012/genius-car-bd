import { Outlet } from "react-router-dom";
import Hooter from "../pages/Shared/Hooter/Hooter";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Hooter></Hooter>
        </div>
    );
};

export default Main;