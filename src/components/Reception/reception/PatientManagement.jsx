import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
} from "@mui/material";
import {
  ArrowBack,
  People,
  Search,
  Edit,
  Visibility,
  Delete,
  Add,
  Phone,
  Email,
} from "@mui/icons-material";
import PatientRegistration from "./PatientRegistration"; // adjust the path if needed

const PatientManagement = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false); // Toggle view

  const [patients] = useState([
    {
      id: "P001",
      firstName: "John",
      lastName: "Doe",
      age: 35,
      gender: "Male",
      phone: "+1-555-0123",
      email: "john.doe@email.com",
      lastVisit: "2024-01-15",
      status: "Active",
    },
    {
      id: "P002",
      firstName: "Jane",
      lastName: "Smith",
      age: 28,
      gender: "Female",
      phone: "+1-555-0124",
      email: "jane.smith@email.com",
      lastVisit: "2024-01-10",
      status: "Active",
    },
    {
      id: "P003",
      firstName: "Robert",
      lastName: "Johnson",
      age: 42,
      gender: "Male",
      phone: "+1-555-0125",
      email: "robert.j@email.com",
      lastVisit: "2023-12-20",
      status: "Inactive",
    },
  ]);

  const filteredPatients = patients.filter(
    (patient) =>
      `${patient.firstName} ${patient.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
  );

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
    setDialogOpen(true);
  };

  const getStatusColor = (status) => {
    return status === "Active" ? "success" : "default";
  };

  // Conditional rendering
  if (showRegistration) {
    return <PatientRegistration onBack={() => setShowRegistration(false)} />;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton onClick={onBack} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Avatar sx={{ bgcolor: "#2e7d32", mr: 2 }}>
          <People />
        </Avatar>
        <Typography
  variant="h4"
  sx={{ fontWeight: "bold", flexGrow: 1, color: "#1e293b" }}
>
  Patient Management
</Typography>

        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ bgcolor: "#2e7d32" }}
          onClick={() => setShowRegistration(true)}
        >
          Add New Patient
        </Button>
      </Box>

      {/* Search and Filters */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search patients by name, ID, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                <Chip label={`Total: ${patients.length}`} color="primary" />
                <Chip
                  label={`Active: ${
                    patients.filter((p) => p.status === "Active").length
                  }`}
                  color="success"
                />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Patients Table */}
      <Card>
        <CardContent>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>Patient ID</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Gender</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Contact</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Last Visit</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id} hover>
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", color: "#1976d2" }}
                      >
                        {patient.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            mr: 2,
                            bgcolor: "#1976d2",
                          }}
                        >
                          {patient.firstName[0]}
                        </Avatar>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {patient.firstName} {patient.lastName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 0.5,
                          }}
                        >
                          <Phone
                            sx={{
                              fontSize: 14,
                              mr: 0.5,
                              color: "text.secondary",
                            }}
                          />
                          <Typography variant="caption">
                            {patient.phone}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Email
                            sx={{
                              fontSize: 14,
                              mr: 0.5,
                              color: "text.secondary",
                            }}
                          />
                          <Typography variant="caption">
                            {patient.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>
                      <Chip
                        label={patient.status}
                        color={getStatusColor(patient.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 0.5 }}>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => handleViewPatient(patient)}
                        >
                          <Visibility fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="warning">
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Patient Details Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ mr: 2, bgcolor: "#1976d2" }}>
              {selectedPatient?.firstName?.[0]}
            </Avatar>
            Patient Details - {selectedPatient?.firstName}{" "}
            {selectedPatient?.lastName}
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {selectedPatient && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Patient ID
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {selectedPatient.id}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Age
                </Typography>
                <Typography variant="body1">
                  {selectedPatient.age} years
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Gender
                </Typography>
                <Typography variant="body1">
                  {selectedPatient.gender}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Status
                </Typography>
                <Chip
                  label={selectedPatient.status}
                  color={getStatusColor(selectedPatient.status)}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Phone
                </Typography>
                <Typography variant="body1">{selectedPatient.phone}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="body1">{selectedPatient.email}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Last Visit
                </Typography>
                <Typography variant="body1">
                  {selectedPatient.lastVisit}
                </Typography>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
          <Button variant="contained" startIcon={<Edit />}>
            Edit Patient
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PatientManagement;
