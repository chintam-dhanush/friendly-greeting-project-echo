
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie, Activity, Info, FileText } from "lucide-react";
import { ChartLine, Database } from "lucide-react";

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

export default AuditorDashboard;
