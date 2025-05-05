
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  userType: z.string().min(1, "Please select a user type"),
});

const userTypes = [
  { id: "energy_producer", label: "Energy Producer", description: "Generate and register renewable energy production" },
  { id: "energy_consumer", label: "Energy Consumer", description: "Purchase and track energy consumption" },
  { id: "grid_operator", label: "Grid Operator", description: "Monitor and manage energy distribution network" },
  { id: "billing_manager", label: "Billing Manager", description: "Handle billing, payments and invoices" },
  { id: "regulatory_officer", label: "Regulatory Officer", description: "Ensure compliance with energy regulations" },
  { id: "auditor", label: "Auditor", description: "Verify energy data and certification claims" },
  { id: "admin", label: "System Administrator", description: "Manage platform users, security and operations" },
];

const Login = () => {
  const [selectedUserType, setSelectedUserType] = useState("");
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      userType: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Store user type in localStorage for the demo
    // In a real app, this would be part of the authentication flow
    localStorage.setItem("userType", values.userType);
    
    // Show success toast
    toast({
      title: "Login successful",
      description: "Redirecting to your dashboard...",
    });

    // Redirect to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
        <Link to="/" className="flex justify-center text-sm text-gray-600 hover:text-gray-900">
          ← Back to homepage
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Login to EnergyChain</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Sign in to your account</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="userType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Type</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedUserType(value);
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your user type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {userTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedUserType && (
                  <div className="bg-blue-50 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-blue-800">Role Description:</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      {userTypes.find(t => t.id === selectedUserType)?.description}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* You could add a "Remember me" checkbox here */}
                  </div>

                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-600">
              Need help? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Contact support</a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
