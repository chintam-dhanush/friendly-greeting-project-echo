
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

// Import all dashboard components
import EnergyProducerDashboard from "@/components/dashboard/EnergyProducerDashboard";
import EnergyConsumerDashboard from "@/components/dashboard/EnergyConsumerDashboard";
import GridOperatorDashboard from "@/components/dashboard/GridOperatorDashboard";
import BillingManagerDashboard from "@/components/dashboard/BillingManagerDashboard";
import RegulatoryOfficerDashboard from "@/components/dashboard/RegulatoryOfficerDashboard";
import AuditorDashboard from "@/components/dashboard/AuditorDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

// Main dashboard component that renders content based on user type
const Dashboard = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const { section } = useParams();

  // For demo purposes, retrieve user type from localStorage 
  // In a real app, this would come from an authentication system
  useEffect(() => {
    // Simulate retrieving user type
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
