
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Users, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              EnergyChain Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Transforming energy transactions with transparent, secure blockchain technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <Link to="/register">Register</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="font-medium">
                <a href="#learn-more">
                  Learn More <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Visual Representation */}
          <div className="mt-16 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">How Energy & Token Flow Works</h2>
            <div className="relative h-64 md:h-80 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center h-full">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100 w-full md:w-1/3">
                  <h3 className="font-medium text-blue-800">Energy Producers</h3>
                  <p className="text-sm text-blue-600">Generate & register production</p>
                </div>
                
                <div className="my-4 md:my-0 flex flex-col md:flex-row items-center justify-center">
                  <ArrowRight className="rotate-90 md:rotate-0 text-gray-400 my-2 md:mx-2" />
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <p className="text-sm font-medium text-green-800">Blockchain Verification</p>
                  </div>
                  <ArrowRight className="rotate-90 md:rotate-0 text-gray-400 my-2 md:mx-2" />
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100 w-full md:w-1/3">
                  <h3 className="font-medium text-purple-800">Energy Consumers</h3>
                  <p className="text-sm text-purple-600">Track & purchase energy tokens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="learn-more" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Blockchain in Energy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-2 rounded-full bg-blue-50">
                    <Shield className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Enhanced Security</h3>
                <p className="text-gray-600 text-center">
                  Immutable records and cryptographic security ensure your energy data remains tamper-proof
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-2 rounded-full bg-green-50">
                    <BarChart className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Real-time Tracking</h3>
                <p className="text-gray-600 text-center">
                  Monitor energy production, distribution, and consumption with accurate real-time data
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-2 rounded-full bg-purple-50">
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Transparent Transactions</h3>
                <p className="text-gray-600 text-center">
                  Eliminate intermediaries and reduce costs while maintaining complete transparency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Supported User Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Energy Producers", desc: "Generate and tokenize renewable energy" },
              { title: "Energy Consumers", desc: "Purchase and track sustainable energy usage" },
              { title: "Grid Operators", desc: "Manage energy distribution and infrastructure" },
              { title: "Billing Managers", desc: "Handle invoicing and payment processing" },
              { title: "Regulatory Officers", desc: "Ensure compliance with energy regulations" },
              { title: "Energy Auditors", desc: "Verify and validate energy production claims" },
              { title: "System Administrators", desc: "Maintain platform security and operations" }
            ].map((user, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-1">{user.title}</h3>
                <p className="text-sm text-gray-600">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">Sustainability & Transparency Focus</h2>
              <p className="text-gray-600 mb-6">
                Our platform is designed with environmental sustainability at its core. We enable 
                transparent tracking of renewable energy from source to consumption, allowing businesses 
                and individuals to verify their green energy usage.
              </p>
              <p className="text-gray-600">
                With blockchain technology, every kilowatt of renewable energy is accounted for, creating 
                a trusted ecosystem for sustainable energy transactions.
              </p>
            </div>
            <div className="md:w-1/2 bg-green-50 p-8 rounded-lg">
              <ul className="space-y-4">
                {[
                  "Reduction in carbon emissions through optimized energy distribution",
                  "Transparent verification of renewable energy certificates",
                  "Incentivizing renewable energy production",
                  "Accessible sustainability metrics for consumers and businesses",
                  "Simplified regulatory compliance and reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">EnergyChain Platform</h3>
              <p className="text-gray-300">
                Revolutionizing energy transactions with blockchain technology for a more sustainable future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                Have questions or need assistance? Reach out to our team.
              </p>
              <a 
                href="mailto:info@energychain.com" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Contact Support
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} EnergyChain Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
