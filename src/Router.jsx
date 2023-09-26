/* eslint-disable no-unused-vars */
//@ts-check
import React, { lazy, Suspense } from "react";
import {
    Routes,
    Route
} from "react-router-dom";
/** Components */
import LoadingPage from "./pages/Shared/Loading/LoadingPage"; 
import { AuthProvider } from "./context/AuthContext";
import Auth from "./pages/Auth";

/** Pages */
const SharedLayout = lazy(() => import("./pages/Shared/Layout/index"));
const Home = lazy(() => import("./pages/Home/index"));
const Game = lazy(() => import("./pages/Game/index"));
const Sobre = lazy(() => import("./pages/Sobre/index"));
const Ranking = lazy(() => import("./pages/Ranking/index"));

export default function Router(  ) {
    return (
        <Auth>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route element={<SharedLayout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/jogar" element={<Game />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/ranking" element={<Ranking />} />
                    </Route>
                </Routes>
            </Suspense>
        </Auth>
    );
};