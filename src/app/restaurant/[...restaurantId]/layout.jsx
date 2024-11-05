import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/restaurant-sidebar";
import { BreadCrumb } from "@/components/custom/BreadCrumb";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="pt-20 w-full space-y-2">
        <div className="flex items-center gap-x-2">
          <SidebarTrigger />
          <BreadCrumb />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
