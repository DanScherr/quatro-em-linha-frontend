/* eslint-disable no-unused-vars */
//@ts-check
import React, { lazy, Suspense } from "react";
import {
    Routes,
    Route
} from "react-router-dom";
/** Components */
import LoadingPage from "./pages/Shared/Loading/LoadingPage"; 

/** Pages */
const SharedLayout = lazy(() => import("./pages/Shared/Layout/index"));
const Home = lazy(() => import("./pages/Home/index"));
const Sobre = lazy(() => import("./pages/Sobre/index"));
const Regras = lazy(() => import("./pages/Regras/index"));
const Contatos = lazy(() => import("./pages/Contatos/index"));
const Play = lazy(() => import("./pages/Play/index"));
const Ranking = lazy(() => import("./pages/Ranking/index"));

export default function Router(  ) {
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route element={<SharedLayout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/regras" element={<Regras />} />
                    <Route path="/contatos" element={<Contatos />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/ranking" element={<Ranking />} />
                </Route>
            </Routes>
        </Suspense>
    )
}