import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar"
import {Button} from "@/components/ui/button.tsx";
import {Menu} from "lucide-react"

export default function HamburgerMenu() {
    const {
        toggleSidebar,
    } = useSidebar();

    return (
            <>
                <Button variant="ghost" onClick={() => toggleSidebar()}><Menu /></Button>
            </>
    )
}
