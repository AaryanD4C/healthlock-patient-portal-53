import { motion } from "framer-motion";
import { Shield, FileText, Users, Search, MessageSquare, LogOut, Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const DoctorDashboard = () => {
  // Mock data
  const patientRecords = [
    { id: 1, patient: "John Doe", record: "Blood Test Results", date: "2024-01-15", status: "Shared" },
    { id: 2, patient: "Jane Smith", record: "MRI Scan", date: "2024-01-12", status: "Requested" },
    { id: 3, patient: "Bob Johnson", record: "Prescription History", date: "2024-01-10", status: "Shared" },
    { id: 4, patient: "Alice Brown", record: "X-Ray Results", date: "2024-01-08", status: "Shared" },
  ];

  const recentRequests = [
    { id: 1, patient: "Emma Wilson", type: "Lab Results", date: "2024-01-16", status: "Pending" },
    { id: 2, patient: "David Lee", type: "Imaging", date: "2024-01-15", status: "Approved" },
    { id: 3, patient: "Sarah Johnson", type: "Medical History", date: "2024-01-14", status: "Pending" },
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
            <span className="text-sm text-muted-foreground">Dr. Sarah Johnson</span>
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
          <h1 className="text-4xl font-bold mb-2">Doctor Dashboard</h1>
          <p className="text-muted-foreground">Access patient records and manage healthcare data securely</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Patient Records */}
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
                      <FileText className="h-5 w-5 mr-2 text-primary" />
                      Patient Records
                    </CardTitle>
                    <CardDescription>Access shared patient medical records</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Search Patient Records</DialogTitle>
                          <DialogDescription>Find patient records by name, ID, or record type</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="search">Search Query</Label>
                            <Input id="search" placeholder="Patient name or record type" className="mt-1" />
                          </div>
                          <Button className="w-full bg-gradient-primary">Search Records</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-gradient-primary hover:shadow-glow">
                          <Plus className="h-4 w-4 mr-2" />
                          Request
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Request Patient Record</DialogTitle>
                          <DialogDescription>Request access to a patient's medical records</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="patientId">Patient ID or Email</Label>
                            <Input id="patientId" placeholder="patient@email.com or ID" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="recordType">Record Type Needed</Label>
                            <Input id="recordType" placeholder="e.g., Blood tests, X-rays, Medical history" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="reason">Medical Reason</Label>
                            <Textarea id="reason" placeholder="Brief medical justification for access" className="mt-1" />
                          </div>
                          <Button className="w-full bg-gradient-primary">Send Request</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Record</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {patientRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{record.patient}</TableCell>
                        <TableCell>{record.record}</TableCell>
                        <TableCell className="text-muted-foreground">{record.date}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            record.status === 'Shared' 
                              ? 'bg-secondary/20 text-secondary' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {record.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" disabled={record.status !== 'Shared'}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            {/* Recent Requests */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Recent Requests
                  </CardTitle>
                  <CardDescription>Your latest record access requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRequests.map((request) => (
                      <div key={request.id} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{request.patient}</div>
                            <div className="text-sm text-muted-foreground">{request.type}</div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            request.status === 'Approved' 
                              ? 'bg-secondary/20 text-secondary' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {request.status}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">{request.date}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Assistant */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-medium bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                    AI Assistant
                  </CardTitle>
                  <CardDescription>Get insights from patient data analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <div className="font-medium text-sm">Recent Analysis</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Pattern detected in patient blood work - recommend follow-up screening.
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ask AI Assistant
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;