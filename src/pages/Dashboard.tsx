
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { ChartPie, BarChart, ChartLine, Activity, Database, Users, Info, FileText } from "lucide-react";

// Dashboard stat card component
const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: string; icon: any; color: string }) => (
  <Card>
    <CardContent className="flex items-center p-6">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </CardContent>
  </Card>
);

// Chart placeholder component
const ChartPlaceholder = ({ title, height }: { title: string; height: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>Data visualization</CardDescription>
    </CardHeader>
    <CardContent>
      <div className={`${height} bg-gray-100 rounded-md flex items-center justify-center`}>
        <p className="text-gray-400 flex items-center gap-2">
          <ChartLine className="h-5 w-5" />
          Chart visualization area
        </p>
      </div>
    </CardContent>
  </Card>
);

// Table placeholder component
const TablePlaceholder = ({ title, columns }: { title: string; columns: string[] }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>Latest data</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="border rounded-md">
        <div className="grid grid-cols-4 gap-4 p-4 border-b bg-gray-50">
          {columns.map((col, i) => (
            <div key={i} className="font-medium text-sm">{col}</div>
          ))}
        </div>
        <div className="p-8 flex items-center justify-center">
          <p className="text-gray-400 flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data table area
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Energy Producer Dashboard content
const EnergyProducerDashboard = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Today's Production" 
        value="245 kWh" 
        icon={ChartPie} 
        color="bg-green-500"
      />
      <StatCard 
        title="Active RECs" 
        value="18" 
        icon={FileText} 
        color="bg-blue-500"
      />
      <StatCard 
        title="Carbon Offset" 
        value="120 kg" 
        icon={Info} 
        color="bg-purple-500"
      />
      <StatCard 
        title="Efficiency" 
        value="94%" 
        icon={Activity} 
        color="bg-yellow-500"
      />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <ChartPlaceholder title="Production History" height="h-80" />
      <ChartPlaceholder title="Energy Distribution" height="h-80" />
    </div>
    
    <TablePlaceholder 
      title="Recent Production Records"
      columns={["Date", "Energy Type", "Amount (kWh)", "Status"]}
    />
  </>
);

// Energy Consumer Dashboard content
const EnergyConsumerDashboard = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Current Usage" 
        value="42 kWh" 
        icon={Activity} 
        color="bg-blue-500"
      />
      <StatCard 
        title="Monthly Bill" 
        value="$128.45" 
        icon={FileText} 
        color="bg-green-500"
      />
      <StatCard 
        title="Green Energy %" 
        value="65%" 
        icon={ChartPie} 
        color="bg-emerald-500"
      />
      <StatCard 
        title="Carbon Footprint" 
        value="85 kg" 
        icon={Info} 
        color="bg-amber-500"
      />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <ChartPlaceholder title="Consumption History" height="h-80" />
      <ChartPlaceholder title="Energy Sources" height="h-80" />
    </div>
    
    <TablePlaceholder 
      title="Recent Bills"
      columns={["Date", "Amount", "Due Date", "Status"]}
    />
  </>
);

// Grid Operator Dashboard content
const GridOperatorDashboard = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Grid Load" 
        value="78%" 
        icon={Activity} 
        color="bg-red-500"
      />
      <StatCard 
        title="Active Nodes" 
        value="126" 
        icon={Database} 
        color="bg-blue-500"
      />
      <StatCard 
        title="Frequency" 
        value="60.01 Hz" 
        icon={ChartLine} 
        color="bg-purple-500"
      />
      <StatCard 
        title="Alerts" 
        value="2" 
        icon={Info} 
        color="bg-amber-500"
      />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <ChartPlaceholder title="Grid Performance" height="h-80" />
      <ChartPlaceholder title="Energy Distribution" height="h-80" />
    </div>
    
    <TablePlaceholder 
      title="Recent Events"
      columns={["Time", "Node", "Event Type", "Status"]}
    />
  </>
);

// Billing Manager Dashboard content
const BillingManagerDashboard = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Total Invoiced" 
        value="$42,568" 
        icon={FileText} 
        color="bg-green-500"
      />
      <StatCard 
        title="Pending" 
        value="$8,921" 
        icon={ChartPie} 
        color="bg-amber-500"
      />
      <StatCard 
        title="Overdue" 
        value="$2,145" 
        icon={Info} 
        color="bg-red-500"
      />
      <StatCard 
        title="Customers" 
        value="1,284" 
        icon={Users} 
        color="bg-blue-500"
      />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <ChartPlaceholder title="Revenue Analysis" height="h-80" />
      <ChartPlaceholder title="Payment Status" height="h-80" />
    </div>
    
    <TablePlaceholder 
      title="Recent Invoices"
      columns={["Customer", "Amount", "Due Date", "Status"]}
    />
  </>
);

// Regulatory Officer Dashboard content
const RegulatoryOfficerDashboard = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Compliant Facilities" 
        value="87%" 
        icon={ChartPie} 
        color="bg-green-500"
      />
      <StatCard 
        title="Pending Audits" 
        value="12" 
        icon={FileText} 
        color="bg-amber-500"
      />
      <StatCard 
        title="Violations" 
        value="3" 
        icon={Info} 
        color="bg-red-500"
      />
      <StatCard 
        title="Certificates Issued" 
        value="78" 
        icon={Database} 
        color="bg-blue-500"
      />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <ChartPlaceholder title="Compliance Trends" height="h-80" />
      <ChartPlaceholder title="Regulatory Issues" height="h-80" />
    </div>
    
    <TablePlaceholder 
      title="Recent Audits"
      columns={["Facility", "Date", "Inspector", "Status"]}
    />
  </>
);

// Auditor Dashboard content
const AuditorDashboard = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Audits Today" 
        value="4" 
        icon={FileText} 
        color="bg-blue-500"
      />
      <StatCard 
        title="Completed" 
        value="78%" 
        icon={ChartPie} 
        color="bg-green-500"
      />
      <StatCard 
        title="Findings" 
        value="12" 
        icon={Info} 
        color="bg-amber-500"
      />
      <StatCard 
        title="Critical Issues" 
        value="2" 
        icon={Activity} 
        color="bg-red-500"
      />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <ChartPlaceholder title="Audit Completion Rate" height="h-80" />
      <ChartPlaceholder title="Findings by Category" height="h-80" />
    </div>
    
    <TablePlaceholder 
      title="Recent Audits"
      columns={["Facility", "Type", "Date", "Status"]}
    />
  </>
);

// Admin Dashboard content
const AdminDashboard = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Active Users" 
        value="324" 
        icon={Users} 
        color="bg-blue-500"
      />
      <StatCard 
        title="System Load" 
        value="42%" 
        icon={ChartPie} 
        color="bg-green-500"
      />
      <StatCard 
        title="Alerts" 
        value="3" 
        icon={Info} 
        color="bg-amber-500"
      />
      <StatCard 
        title="Uptime" 
        value="99.98%" 
        icon={Activity} 
        color="bg-purple-500"
      />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <ChartPlaceholder title="System Performance" height="h-80" />
      <ChartPlaceholder title="User Activity" height="h-80" />
    </div>
    
    <TablePlaceholder 
      title="Recent System Events"
      columns={["Time", "Event", "User", "Status"]}
    />
  </>
);

// Main dashboard component that renders content based on user type
const Dashboard = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  // For demo purposes, retrieve user type from localStorage 
  // In a real app, this would come from an authentication system
  useEffect(() => {
    // Simulate retrieving user type - for demo purposes we'll just use "energy_producer" as default
    // You would typically get this from authentication state
    const storedUserType = localStorage.getItem("userType") || "energy_producer";
    setUserType(storedUserType);
  }, []);

  // Dashboard title based on user type
  const getDashboardTitle = () => {
    switch(userType) {
      case "energy_producer": return "Energy Producer Dashboard";
      case "energy_consumer": return "Energy Consumer Dashboard";
      case "grid_operator": return "Grid Operations";
      case "billing_manager": return "Billing Management";
      case "regulatory_officer": return "Regulatory Compliance";
      case "auditor": return "Energy Audits";
      case "admin": return "System Administration";
      default: return "Dashboard";
    }
  };

  // Render dashboard content based on user type
  const renderDashboardContent = () => {
    switch(userType) {
      case "energy_producer": return <EnergyProducerDashboard />;
      case "energy_consumer": return <EnergyConsumerDashboard />;
      case "grid_operator": return <GridOperatorDashboard />;
      case "billing_manager": return <BillingManagerDashboard />;
      case "regulatory_officer": return <RegulatoryOfficerDashboard />;
      case "auditor": return <AuditorDashboard />;
      case "admin": return <AdminDashboard />;
      default: return <EnergyProducerDashboard />;
    }
  };

  return (
    <DashboardLayout title={getDashboardTitle()} userType={userType}>
      {renderDashboardContent()}
    </DashboardLayout>
  );
};

export default Dashboard;
