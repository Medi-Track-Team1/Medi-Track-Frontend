import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Divider,
  TextField
} from '@mui/material';
import {
  ArrowBack,
  Queue,
  PlayArrow,
  CheckCircle,
  PriorityHigh
} from '@mui/icons-material';

const QueueManagement = ({ onBack }) => {
  const [currentPatient, setCurrentPatient] = useState({
    id: 'P001',
    name: 'John Doe',
    number: 1,
    doctor: 'Dr. Smith',
    estimatedTime: '10 mins'
  });

  const [queueList, setQueueList] = useState([
    { id: 'P002', name: 'Jane Smith', number: 2, doctor: 'Dr. Johnson', priority: 'Normal', waitingTime: '25 mins', estimatedTime: '15 mins' },
    { id: 'P003', name: 'Robert Wilson', number: 3, doctor: 'Dr. Williams', priority: 'High', waitingTime: '20 mins', estimatedTime: '12 mins' },
    { id: 'P004', name: 'Emily Davis', number: 4, doctor: 'Dr. Brown', priority: 'Normal', waitingTime: '15 mins', estimatedTime: '20 mins' },
    { id: 'P005', name: 'Michael Johnson', number: 5, doctor: 'Dr. Smith', priority: 'Urgent', waitingTime: '10 mins', estimatedTime: '8 mins' }
  ]);

  const [completedToday, setCompletedToday] = useState([
    { id: 'P010', name: 'Sarah Connor', completedAt: '09:30' },
    { id: 'P011', name: 'Tom Hardy', completedAt: '10:15' },
    { id: 'P012', name: 'Lisa Wang', completedAt: '11:00' }
  ]);

  const [skippedPatients, setSkippedPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    setElapsedTime(0);
  }, [currentPatient]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNextPatient = () => {
    if (queueList.length > 0) {
      const nextPatient = queueList[0];
      setCurrentPatient(nextPatient);
      setQueueList(queueList.slice(1));
    } else {
      setCurrentPatient(null);
    }
  };

  const handleCompletePatient = () => {
    const completedPatient = {
      id: currentPatient.id,
      name: currentPatient.name,
      completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setCompletedToday((prev) => [...prev, completedPatient]);
    handleNextPatient();
  };

  const handleSkipPatient = () => {
    if (queueList.length > 0) {
      const skippedPatient = currentPatient;
      const nextPatient = queueList[0];
      setCurrentPatient(nextPatient);
      setQueueList([...queueList.slice(1)]);
      setSkippedPatients((prev) => [...prev, skippedPatient]);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgent': return 'error';
      case 'High': return 'warning';
      case 'Normal': return 'primary';
      default: return 'default';
    }
  };

  const averageWaitTime = queueList.length > 0
    ? Math.round(queueList.reduce((sum, patient) => sum + parseInt(patient.waitingTime), 0) / queueList.length)
    : 0;

  const filteredQueue = queueList.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4, px: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
            px: 3,
            py: 2,
            borderRadius: 3,
          }}
        >
          <IconButton onClick={onBack} sx={{ mr: 2, color: "black" }}>
            <ArrowBack />
          </IconButton>
          <Avatar sx={{ bgcolor: "#fff", color: "#d32f2f", mr: 2 }}>
            <Queue />
          </Avatar>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", flexGrow: 1, color: "#1e293b" }}
          >
            Queue Management
          </Typography>

        
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: "#e3f2fd",
                border: "2px solid #1976d2",
                borderRadius: 3,
                boxShadow: 4,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Currently Serving
                </Typography>
                {currentPatient ? (
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: "#1976d2",
                          mr: 2,
                          width: 56,
                          height: 56,
                          boxShadow: 2,
                        }}
                      >
                        <Typography variant="h6">
                          {currentPatient.number}
                        </Typography>
                      </Avatar>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          {currentPatient.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          ID: {currentPatient.id}
                        </Typography>
                        <Typography variant="body2">
                          Doctor: {currentPatient.doctor}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          Serving Time: {Math.floor(elapsedTime / 60)}m{" "}
                          {elapsedTime % 60}s
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button
                        variant="contained"
                        startIcon={<CheckCircle />}
                        onClick={handleCompletePatient}
                        color="success"
                        size="large"
                        sx={{ borderRadius: 2, boxShadow: 2 }}
                      >
                        Complete
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<PlayArrow />}
                        onClick={handleSkipPatient}
                        color="warning"
                        size="large"
                        sx={{ borderRadius: 2 }}
                      >
                        Skip
                      </Button>
                    </Box>

                    <Button
                      variant="contained"
                      onClick={handleNextPatient}
                      sx={{ mt: 2, borderRadius: 2 }}
                      color="info"
                      disabled={queueList.length === 0}
                    >
                      Call Next Patient
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ textAlign: "center", py: 4 }}>
                    <Typography variant="h6" color="text.secondary">
                      No patient currently being served
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>

            <Card sx={{ mt: 2, borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Queue Statistics
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", color: "#d32f2f" }}
                      >
                        {queueList.length}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Patients Waiting
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", color: "#2e7d32" }}
                      >
                        {completedToday.length}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Completed Today
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", color: "#ed6c02" }}
                      >
                        {averageWaitTime}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Avg Wait (mins)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", color: "#1976d2" }}
                      >
                        {
                          queueList.filter((p) => p.priority === "Urgent")
                            .length
                        }
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Urgent Cases
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side: Waiting Queue + Completed & Skipped Patients */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                      Waiting Queue
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Search Patient..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    {filteredQueue.length > 0 ? (
                      <List>
                        {filteredQueue.map((patient, index) => (
                          <React.Fragment key={patient.id}>
                            <ListItem sx={{ px: 0 }}>
                              <ListItemAvatar>
                                <Avatar
                                  sx={{
                                    bgcolor:
                                      getPriorityColor(patient.priority) ===
                                      "error"
                                        ? "#d32f2f"
                                        : "#1976d2",
                                    boxShadow: 2,
                                  }}
                                >
                                  <Typography
                                    variant="body1"
                                    sx={{ fontWeight: "bold" }}
                                  >
                                    {patient.number}
                                  </Typography>
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <Typography
                                      variant="body1"
                                      sx={{ fontWeight: "bold" }}
                                    >
                                      {patient.name}
                                    </Typography>
                                    <Chip
                                      label={patient.priority}
                                      size="small"
                                      color={getPriorityColor(patient.priority)}
                                      icon={
                                        patient.priority === "Urgent" ? (
                                          <PriorityHigh />
                                        ) : null
                                      }
                                    />
                                  </Box>
                                }
                                secondary={
                                  <Box>
                                    <Typography
                                      variant="caption"
                                      display="block"
                                    >
                                      ID: {patient.id} | Doctor:{" "}
                                      {patient.doctor}
                                    </Typography>
                                    <Box
                                      sx={{ display: "flex", gap: 2, mt: 0.5 }}
                                    >
                                      <Chip
                                        label={`Waiting: ${patient.waitingTime}`}
                                        size="small"
                                        variant="outlined"
                                      />
                                      <Chip
                                        label={`Est: ${patient.estimatedTime}`}
                                        size="small"
                                        variant="outlined"
                                        color="primary"
                                      />
                                    </Box>
                                  </Box>
                                }
                              />
                            </ListItem>
                            {index < filteredQueue.length - 1 && <Divider />}
                          </React.Fragment>
                        ))}
                      </List>
                    ) : (
                      <Box sx={{ textAlign: "center", py: 4 }}>
                        <Typography variant="body1" color="text.secondary">
                          No patients in queue
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                      <CardContent>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", mb: 2 }}
                        >
                          Completed Today
                        </Typography>
                        <List dense>
                          {completedToday.map((patient, index) => (
                            <React.Fragment key={patient.id}>
                              <ListItem sx={{ px: 0 }}>
                                <ListItemAvatar>
                                  <Avatar
                                    sx={{ bgcolor: "#2e7d32", boxShadow: 2 }}
                                  >
                                    <CheckCircle />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary={patient.name}
                                  secondary={`Completed at ${patient.completedAt}`}
                                />
                              </ListItem>
                              {index < completedToday.length - 1 && <Divider />}
                            </React.Fragment>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                      <CardContent>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", mb: 2 }}
                        >
                          Skipped Patients
                        </Typography>
                        {skippedPatients.length > 0 ? (
                          <List dense>
                            {skippedPatients.map((patient, index) => (
                              <React.Fragment key={patient.id}>
                                <ListItem sx={{ px: 0 }}>
                                  <ListItemAvatar>
                                    <Avatar
                                      sx={{ bgcolor: "orange", boxShadow: 2 }}
                                    >
                                      <PlayArrow />
                                    </Avatar>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={patient.name}
                                    secondary={`Skipped (ID: ${patient.id})`}
                                  />
                                </ListItem>
                                {index < skippedPatients.length - 1 && (
                                  <Divider />
                                )}
                              </React.Fragment>
                            ))}
                          </List>
                        ) : (
                          <Typography variant="body2" color="text.secondary">
                            No skipped patients.
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default QueueManagement;
