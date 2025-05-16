import HamburgerMenuBtn from "@/components/hamburger-menu/hamburgerMenuBtn.tsx";
import { Button } from "@/components/ui/button"


export default function TopBar() {

    return (
            <header className="w-full flex items-center justify-between px-4 py-3 shadow-md bg-white">
                <HamburgerMenuBtn/>
                <h1 className="text-xl font-semibold ">My App</h1>

                <Button variant="outline">Log Out</Button>
            </header>
    )
}

