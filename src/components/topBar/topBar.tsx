import HamburgerMenuBtn from "@/components/hamburger-menu/hamburgerMenuBtn.tsx";
import {Button} from "@/components/ui/button"
import {useContext} from "react";
import {PageContext} from "@/lib/currentPage.ts";


export default function TopBar() {
    const {currentPage, setCurrentPage} = useContext(PageContext);

    return (<header className="w-full flex items-center justify-between px-4 py-3 shadow-md bg-white">
                <HamburgerMenuBtn/>
                <h1 className="text-xl font-semibold" onClick={() => setCurrentPage("reintro")}>Equilibrio</h1>
                <Button variant="outline">Log Out</Button>
            </header>)
}

