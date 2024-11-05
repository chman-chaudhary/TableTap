import {
  Calendar,
  Home,
  Inbox,
  ListChecksIcon,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaHistory, FaHotel } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="pt-16">
      <SidebarHeader className="flex flex-row items-center justify-between px-5">
        <FaHotel className="size-8" />
        <div>
          <SidebarGroupLabel className="text-lg font-semibold dark:text-white text-black">
            Gulshan Dhabha
          </SidebarGroupLabel>
          <SidebarGroupLabel>Kotban, Mathura - 281403</SidebarGroupLabel>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Order Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span>
                    <ListChecksIcon />
                    Live Order Queue
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span>
                    <FaHistory />
                    Order History
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Managment</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span>
                    <ListChecksIcon />
                    Menu Items
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span>
                    <TbCategoryPlus />
                    Categories & Specials
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span>
                    <MdLocalGroceryStore />
                    Item Availability
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="py-4 flex flex-row items-center">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <div>
          <SidebarGroupLabel className="text-lg font-semibold dark:text-white text-black">
            Jile Singh
          </SidebarGroupLabel>
          <SidebarGroupLabel>jilesingh@gmail.com</SidebarGroupLabel>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
