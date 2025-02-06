import Navbar from "@/componets/share/main/Navbar"
import Footer from "@/componets/share/main/Footer"
import { Outlet } from "react-router"

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <div className="pt-16">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}