import SharedLayoutFooter from "./components/Footer";
import SharedLayoutHeader from "./components/Header";
import { Outlet } from "react-router-dom";

export default function SharedLayout(  ) {
    return (
        <div className="container">
            <SharedLayoutHeader />
            <Outlet />
            <div className="fixed-bottom">
                <SharedLayoutFooter />
            </div>
        </div>
    )
}