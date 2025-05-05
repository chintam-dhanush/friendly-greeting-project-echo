
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie, FileText, Users } from "lucide-react";
import { ChartLine, Database, Info } from "lucide-react";

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

export default BillingManagerDashboard;
