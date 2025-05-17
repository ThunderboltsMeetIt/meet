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
import {useContext} from "react";
import {PageContext} from "@/lib/currentPage.ts"

export default function HamburgerMenu() {
    const {currentPage, setCurrentPage} = useContext(PageContext);

    return (
            <>
                <Sidebar collapsible="offcanvas">
                    <SidebarContent>
                        <SidebarGroup>
                            {/*<SidebarGroupLabel>Application</SidebarGroupLabel>*/}
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <a onClick={() => setCurrentPage("intro")}>
                                                Daily Quote
                                            </a>
                                        </SidebarMenuButton>
                                        <SidebarMenuButton asChild>
                                            <a onClick={() => setCurrentPage("calendar")}>
                                                Calendar
                                            </a>
                                        </SidebarMenuButton>
                                        <SidebarMenuButton asChild>
                                            <a onClick={() => setCurrentPage("reintro")}>
                                                Second visit
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
            </>
    )
}
