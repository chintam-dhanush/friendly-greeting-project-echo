
import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart, 
  User, 
  Settings, 
  LogOut,
  ChartPie,
  Activity,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  userType: string;
}

// Get navigation items based on user type
const getNavItems = (userType: string) => {
  const commonItems = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ];
  
  const roleSpecificItems: Record<string, { name: string; href: string; icon: any }[]> = {
    energy_producer: [
      { name: "Production", href: "/dashboard/production", icon: ChartPie },
      { name: "RECs", href: "/dashboard/recs", icon: BarChart },
      { name: "Maintenance", href: "/dashboard/maintenance", icon: Settings },
    ],
    energy_consumer: [
      { name: "Consumption", href: "/dashboard/consumption", icon: ChartPie },
      { name: "Billing", href: "/dashboard/billing", icon: BarChart },
      { name: "Support", href: "/dashboard/support", icon: Users },
    ],
    grid_operator: [
      { name: "Grid Monitor", href: "/dashboard/grid", icon: Activity },
      { name: "Allocations", href: "/dashboard/allocations", icon: ChartPie },
      { name: "Outages", href: "/dashboard/outages", icon: BarChart },
    ],
    billing_manager: [
      { name: "Invoices", href: "/dashboard/invoices", icon: BarChart },
      { name: "Rates", href: "/dashboard/rates", icon: ChartPie },
      { name: "Payments", href: "/dashboard/payments", icon: Activity },
    ],
    regulatory_officer: [
      { name: "Compliance", href: "/dashboard/compliance", icon: BarChart },
      { name: "Audits", href: "/dashboard/audits", icon: ChartPie },
      { name: "Documents", href: "/dashboard/documents", icon: Users },
    ],
    auditor: [
      { name: "Audits", href: "/dashboard/audits", icon: ChartPie },
      { name: "Reports", href: "/dashboard/reports", icon: BarChart },
      { name: "Compliance", href: "/dashboard/compliance", icon: Activity },
    ],
    admin: [
      { name: "Users", href: "/dashboard/users", icon: Users },
      { name: "System", href: "/dashboard/system", icon: Activity },
      { name: "Security", href: "/dashboard/security", icon: BarChart },
    ],
  };
  
  return [...(roleSpecificItems[userType] || []), ...commonItems];
};

export const DashboardLayout = ({ children, title, userType }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const navItems = getNavItems(userType);
  
  const handleLogout = () => {
    // Here you would typically handle logout logic
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="flex flex-col h-full">
          <div className="px-4 py-6 border-b">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-green-600">EnergyChain</span>
            </Link>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <NavigationMenu orientation="vertical" className="w-full max-w-none flex flex-col">
              <NavigationMenuList className="flex flex-col gap-1 w-full">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name} className="w-full">
                    <Link to={item.href} className={navigationMenuTriggerStyle() + " w-full flex gap-2 items-center"}>
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="p-4 border-t">
            <Button 
              variant="ghost" 
              onClick={handleLogout} 
              className="w-full flex gap-2 items-center justify-center text-red-500 hover:text-red-600"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            
            <div className="flex items-center">
              <div className="relative md:hidden mr-2">
                {/* Mobile menu button would go here */}
              </div>
              <span className="text-sm text-gray-700 mr-2">Welcome, User</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">U</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
