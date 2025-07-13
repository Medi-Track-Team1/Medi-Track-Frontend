import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  AppBar,
  Slide,
  Fade,
  Grow,
} from "@mui/material";
import {
  PersonAdd,
  People,
  Receipt,
  Schedule,
  Queue,
} from "@mui/icons-material";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";

// Import your components
import PatientRegistration from "./PatientRegistration";
import PatientManagement from "./PatientManagement";
import BillingSystem from "./BillingSystem";
import AppointmentManagement from "./AppointmentManagement";
import QueueManagement from "./QueueManagement";
import Navbar from "./Navbar";

const DashboardContent = ({ moduleCards, dashboardStats, handleCardClick }) => (
  <Fade in={true} timeout={800}>
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "calc(100vh - 64px)" }}>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Dashboard Stats */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            spacing={4}
            sx={{ mb: 6, mt: -4, maxWidth: "1200px" }}
            justifyContent="center"
          >
            {dashboardStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  sx={{ px: 3, py: 3 }}
                >
                  <Grow in={true} timeout={1000 + index * 150}>
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                        border: "1px solid #e2e8f0",
                        borderRadius: 3,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-8px) scale(1.02)",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                          "& .stat-icon": {
                            transform: "scale(1.2) rotate(5deg)",
                            color: stat.color,
                          },
                          "& .stat-count": {
                            transform: "scale(1.1)",
                            color: stat.color,
                          },
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, pb: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 2,
                          }}
                        >
                          <IconComponent
                            className="stat-icon"
                            sx={{
                              fontSize: 40,
                              color: "#64748b",
                              transition: "all 0.3s ease",
                            }}
                          />
                          <Typography
                            className="stat-count"
                            variant="h3"
                            sx={{
                              fontWeight: 800,
                              color: "#1e293b",
                              fontSize: "2.2rem",
                              transition: "all 0.3s ease",
                            }}
                          >
                            {stat.count}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#64748b",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          {stat.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grow>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Module Cards */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          Healthcare Management
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ maxWidth: "1200px" }}
          >
            {moduleCards.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <Grow in={true} timeout={1200 + index * 200}>
                    <Card
                      sx={{
                        height: "100%",
                        width: "90%",
                        background:
                          "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                        border: "1px solid #e2e8f0",
                        borderRadius: 4,
                        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-12px)",
                          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                          "& .module-icon": {
                            transform: "scale(1.3) rotate(10deg)",
                            color: module.color,
                          },
                          "& .module-button": {
                            background: `linear-gradient(135deg, ${module.color} 0%, ${module.color}dd 100%)`,
                            transform: "scale(1.05)",
                            boxShadow: `0 8px 25px ${module.color}40`,
                          },
                        },
                      }}
                      onClick={() => handleCardClick(module.module)}
                    >
                      <CardContent sx={{ p: 4, pb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 3,
                          }}
                        >
                          <IconComponent
                            className="module-icon"
                            sx={{
                              fontSize: 50,
                              color: "#2563eb",
                              mr: 2,
                              transition: "all 0.4s ease",
                            }}
                          />
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              color: "#1e293b",
                              fontSize: "1.4rem",
                            }}
                          >
                            {module.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#64748b",
                            lineHeight: 1.6,
                            mb: 3,
                            fontSize: "0.95rem",
                          }}
                        >
                          {module.description}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 4, pt: 0 }}>
                        <Button
                          className="module-button"
                          variant="contained"
                          fullWidth
                          sx={{
                            background:
                              "linear-gradient(135deg, #2563eb 0%, #2563eb 100%)",
                            color: "white",
                            py: 1.5,
                            fontWeight: 600,
                            borderRadius: 2.5,
                            textTransform: "none",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            border: "none",
                            "&:hover": {
                              background: `linear-gradient(135deg, ${module.color} 0%, ${module.color}dd 100%)`,
                            },
                          }}
                        >
                          Access Module
                        </Button>
                      </CardActions>
                    </Card>
                  </Grow>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  </Fade>
);

const ReceptionDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeModule, setActiveModule] = useState(
    location.pathname.split("/").pop() || "dashboard"
  );

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setActiveModule(path === "reception" || !path ? "dashboard" : path);
  }, [location]);

  const dashboardStats = [
    {
      title: "Today's Appointments",
      count: 24,
      icon: Schedule,
      color: "#2563eb",
    },
    { title: "Patients in Queue", count: 8, icon: Queue, color: "#2563eb" },
    { title: "New Registrations", count: 5, icon: PersonAdd, color: "#2563eb" },
    { title: "Pending Bills", count: 12, icon: Receipt, color: "#2563eb" },
  ];

  const moduleCards = [
    {
      title: "Patient Registration",
      description:
        "Register new patients and manage comprehensive profiles with medical history",
      icon: PersonAdd,
      module: "registration",
      color: "#2563eb",
    },
    {
      title: "Patient Management",
      description:
        "View, edit and maintain existing patient records and medical information",
      icon: People,
      module: "patients",
      color: "#2563eb",
    },
    {
      title: "Billing System",
      description:
        "Generate invoices, process payments and manage financial transactions",
      icon: Receipt,
      module: "billing",
      color: "#2563eb",
    },
    {
      title: "Appointments",
      description:
        "Schedule appointments, manage calendar and coordinate with medical staff",
      icon: Schedule,
      module: "appointments",
      color: "#2563eb",
    },
    {
      title: "Queue Management",
      description:
        "Manage patient queues, waiting times and optimize workflow efficiency",
      icon: Queue,
      module: "queue",
      color: "#2563eb",
    },
  ];

  const handleCardClick = (module) => {
    navigate(module);
  };

  const handleBackToDashboard = () => {
    navigate("");
  };

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
      >
        {/* Your AppBar content */}
        <Navbar />
      </AppBar>

      <Routes>
        <Route
          index
          element={
            <DashboardContent
              moduleCards={moduleCards}
              dashboardStats={dashboardStats}
              handleCardClick={handleCardClick}
            />
          }
        />
        <Route
          path="registration"
          element={
            <Slide
              direction="left"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={600}
            >
              <div>
                <PatientRegistration onBack={handleBackToDashboard} />
              </div>
            </Slide>
          }
        />
        <Route
          path="patients"
          element={
            <Slide
              direction="left"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={600}
            >
              <div>
                <PatientManagement onBack={handleBackToDashboard} />
              </div>
            </Slide>
          }
        />
        <Route
          path="billing"
          element={
            <Slide
              direction="left"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={600}
            >
              <div>
                <BillingSystem onBack={handleBackToDashboard} />
              </div>
            </Slide>
          }
        />
        <Route
          path="appointments"
          element={
            <Slide
              direction="left"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={600}
            >
              <div>
                <AppointmentManagement onBack={handleBackToDashboard} />
              </div>
            </Slide>
          }
        />
        <Route
          path="queue"
          element={
            <Slide
              direction="left"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={600}
            >
              <div>
                <QueueManagement onBack={handleBackToDashboard} />
              </div>
            </Slide>
          }
        />
      </Routes>
    </Box>
  );
};

export default ReceptionDashboard;
