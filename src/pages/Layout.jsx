import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout(){
    return(
        <>
            <Navbar />      {/* This navbar is the shared UI we want to share across pages. */}
            <Outlet />      {/* The actual page which will be rendered along with the navbar */}
        </>
    )
}

export default MainLayout;