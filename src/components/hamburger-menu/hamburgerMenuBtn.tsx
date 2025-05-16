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
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
    } = useSidebar();

    // const toggle = () => {
    //     setOpen(!open);
    //     setOpenMobile(!open);
    // }

    return (
            <>
                <Button variant="ghost" onClick={() => toggleSidebar()}><Menu /></Button>
            </>
    )
}
