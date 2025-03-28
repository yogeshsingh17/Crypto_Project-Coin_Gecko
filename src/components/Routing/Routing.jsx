import { Route, Routes } from "react-router-dom";
import MainLayout from "../../pages/Layout";
import { lazy, Suspense } from "react";
// import ContentLoader, { Facebook } from "react-content-loader";
// import PageLoader from "../PageLoader/PageLoader";
import MyLoader from "../PageLoader/PageLoader";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));

function Routing(){
    return (
        <Routes>
            <Route path="/"  element={<MainLayout/>}>
                <Route index element={
                    <Suspense fallback={<MyLoader />}>
                        <Home />
                    </Suspense>
                } />
                <Route path="/details/:coinId" element={
                    <Suspense fallback={<MyLoader />}>
                        <CoinDetailsPage/>
                    </Suspense>
                }/>
            </Route>
        </Routes>
    )
}

export default Routing;