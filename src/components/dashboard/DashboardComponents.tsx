
import { ChartLine, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Common dashboard components that can be shared across dashboards

// Dashboard stat card component
export const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: string; icon: any; color: string }) => (
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
export const ChartPlaceholder = ({ title, height }: { title: string; height: string }) => (
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
export const TablePlaceholder = ({ title, columns }: { title: string; columns: string[] }) => (
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
