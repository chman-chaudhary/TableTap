import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/restaurant-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="pt-16">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
