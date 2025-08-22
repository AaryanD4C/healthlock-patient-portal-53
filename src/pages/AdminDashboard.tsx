import { motion } from "framer-motion";
import { Shield, Users, Activity, Settings, LogOut, Plus, BarChart3, UserCheck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminDashboard = () => {
  // Mock data
  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", email: "sarah.johnson@hospital.com", hospital: "City General", status: "Active", patients: 247 },
    { id: 2, name: "Dr. Michael Chen", email: "michael.chen@metro.com", hospital: "Metro Medical", status: "Active", patients: 189 },
    { id: 3, name: "Dr. Emily Davis", email: "emily.davis@community.com", hospital: "Community Clinic", status: "Pending", patients: 156 },
    { id: 4, name: "Dr. Robert Wilson", email: "robert.wilson@central.com", hospital: "Central Hospital", status: "Active", patients: 203 },
  ];

  const systemLogs = [
    { id: 1, action: "Doctor Registration", user: "Dr. Emily Davis", timestamp: "2024-01-16 09:30:15", status: "Success" },
    { id: 2, action: "Record Access", user: "Dr. Sarah Johnson", timestamp: "2024-01-16 09:15:32", status: "Success" },
    { id: 3, action: "Patient Registration", user: "John Doe", timestamp: "2024-01-16 08:45:21", status: "Success" },
    { id: 4, action: "Failed Login Attempt", user: "unknown@test.com", timestamp: "2024-01-16 08:30:45", status: "Failed" },
  ];

  const analyticsData = [
    { metric: "Total Users", value: "1,247", change: "+12%" },
    { metric: "Records Shared", value: "8,932", change: "+18%" },
    { metric: "Active Doctors", value: "342", change: "+5%" },
    { metric: "System Uptime", value: "99.9%", change: "0%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              HealthLock
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Admin Portal</span>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">System administration and analytics for HealthLock platform</p>
        </motion.div>

        {/* Analytics Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          {analyticsData.map((item, index) => (
            <Card key={item.metric} className="bg-gradient-card shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{item.metric}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className={`text-sm ${item.change.startsWith('+') ? 'text-secondary' : 'text-muted-foreground'}`}>
                    {item.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctor Management */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Doctor Management
                    </CardTitle>
                    <CardDescription>Manage healthcare provider accounts and permissions</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-primary hover:shadow-glow">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Doctor
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Doctor</DialogTitle>
                        <DialogDescription>Register a new healthcare provider in the system</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="doctorName">Full Name</Label>
                          <Input id="doctorName" placeholder="Dr. John Smith" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="doctorEmail">Email Address</Label>
                          <Input id="doctorEmail" type="email" placeholder="john.smith@hospital.com" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="hospital">Hospital/Clinic</Label>
                          <Input id="hospital" placeholder="General Hospital" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="specialty">Specialty</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select specialty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="neurology">Neurology</SelectItem>
                              <SelectItem value="orthopedics">Orthopedics</SelectItem>
                              <SelectItem value="general">General Medicine</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full bg-gradient-primary">Add Doctor</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Doctor</TableHead>
                      <TableHead>Hospital</TableHead>
                      <TableHead>Patients</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {doctors.map((doctor) => (
                      <TableRow key={doctor.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{doctor.name}</div>
                            <div className="text-sm text-muted-foreground">{doctor.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{doctor.hospital}</TableCell>
                        <TableCell>{doctor.patients}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            doctor.status === 'Active' 
                              ? 'bg-secondary/20 text-secondary' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {doctor.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <UserCheck className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            {/* System Analytics */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    System Analytics
                  </CardTitle>
                  <CardDescription>Platform usage and performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-primary/5 rounded-lg">
                      <div className="text-sm font-medium">Daily Active Users</div>
                      <div className="text-2xl font-bold mt-1">2,847</div>
                      <div className="text-xs text-muted-foreground">+5.2% from yesterday</div>
                    </div>
                    <div className="p-4 bg-gradient-secondary/5 rounded-lg">
                      <div className="text-sm font-medium">Records Processed</div>
                      <div className="text-2xl font-bold mt-1">1,456</div>
                      <div className="text-xs text-muted-foreground">+12.8% from yesterday</div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Full Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-primary" />
                    System Status
                  </CardTitle>
                  <CardDescription>Real-time system health monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Database</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-xs text-secondary">Healthy</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">API Services</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-xs text-secondary">Operational</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">File Storage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-xs text-yellow-600">Maintenance</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Security</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-xs text-secondary">Secure</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* System Logs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
                System Logs
              </CardTitle>
              <CardDescription>Recent system activities and security events</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {systemLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.action}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell className="text-muted-foreground">{log.timestamp}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          log.status === 'Success' 
                            ? 'bg-secondary/20 text-secondary' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {log.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;