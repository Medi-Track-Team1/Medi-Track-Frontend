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
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  ArrowBack,
  Receipt,
  Add,
  Delete,
  Print,
  Send,
  Payment,
} from "@mui/icons-material";

const BillingSystem = ({ onBack }) => {
  const [billItems, setBillItems] = useState([
    { id: 1, service: "Consultation", quantity: 1, rate: 150, amount: 150 },
    { id: 2, service: "Blood Test", quantity: 1, rate: 75, amount: 75 },
  ]);

  const [patientId, setPatientId] = useState("P001");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [discount, setDiscount] = useState(0);

  const subtotal = billItems.reduce((sum, item) => sum + item.amount, 0);
  const discountAmount = (subtotal * discount) / 100;
  const tax = (subtotal - discountAmount) * 0.1;
  const total = subtotal - discountAmount + tax;

  const addBillItem = () => {
    const newItem = {
      id: billItems.length + 1,
      service: "New Service",
      quantity: 1,
      rate: 0,
      amount: 0,
    };
    setBillItems([...billItems, newItem]);
  };

  const updateBillItem = (id, field, value) => {
    setBillItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === "quantity" || field === "rate") {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          }
          return updatedItem;
        }
        return item;
      })
    );
  };

  const removeBillItem = (id) => {
    setBillItems(billItems.filter((item) => item.id !== id));
  };

  const handlePrintBill = () => {
    console.log("Printing bill...");
  };

  const handleSendBill = () => {
    console.log("Sending bill...");
  };

  const handleProcessPayment = () => {
    console.log("Processing payment...", {
      patientId,
      total,
      paymentMethod,
      items: billItems,
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        py: 4,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ boxShadow: 3, p: 4, borderRadius: 3, bgcolor: "white" }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <IconButton onClick={onBack} sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Avatar sx={{ bgcolor: "#ed6c02", mr: 2 }}>
            <Receipt />
          </Avatar>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1e293b" }}
          >
            Billing System
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Left - Bill Creator */}
          <Grid item xs={12} lg={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                  Create Bill
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Patient ID"
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Bill Date"
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Services & Items
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<Add />}
                    onClick={addBillItem}
                  >
                    Add Item
                  </Button>
                </Box>

                <TableContainer
                  component={Paper}
                  elevation={0}
                  sx={{ border: "1px solid #e0e0e0" }}
                >
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Service/Item
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Quantity
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Rate ($)
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Amount ($)
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {billItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <TextField
                              fullWidth
                              size="small"
                              value={item.service}
                              onChange={(e) =>
                                updateBillItem(
                                  item.id,
                                  "service",
                                  e.target.value
                                )
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              size="small"
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateBillItem(
                                  item.id,
                                  "quantity",
                                  parseInt(e.target.value) || 0
                                )
                              }
                              sx={{ width: 80 }}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              size="small"
                              type="number"
                              value={item.rate}
                              onChange={(e) =>
                                updateBillItem(
                                  item.id,
                                  "rate",
                                  parseFloat(e.target.value) || 0
                                )
                              }
                              sx={{ width: 100 }}
                            />
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: "bold" }}
                            >
                              ${item.amount.toFixed(2)}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => removeBillItem(item.id)}
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Right - Summary */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={2}>
              {/* Bill Summary */}
              <Grid item xs={12} md={6} lg={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                      Bill Summary
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <TextField
                        fullWidth
                        label="Discount (%)"
                        type="number"
                        value={discount}
                        onChange={(e) =>
                          setDiscount(parseFloat(e.target.value) || 0)
                        }
                        sx={{ mb: 2 }}
                      />
                      <FormControl fullWidth>
                        <InputLabel>Payment Method</InputLabel>
                        <Select
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          label="Payment Method"
                        >
                          <MenuItem value="cash">Cash</MenuItem>
                          <MenuItem value="card">Credit/Debit Card</MenuItem>
                          <MenuItem value="insurance">Insurance</MenuItem>
                          <MenuItem value="check">Check</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2">Subtotal:</Typography>
                        <Typography variant="body2">
                          ${subtotal.toFixed(2)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2">
                          Discount ({discount}%):
                        </Typography>
                        <Typography variant="body2" color="error">
                          -${discountAmount.toFixed(2)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2">Tax (10%):</Typography>
                        <Typography variant="body2">
                          ${tax.toFixed(2)}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 1 }} />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          Total:
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", color: "#1976d2" }}
                        >
                          ${total.toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<Payment />}
                        onClick={handleProcessPayment}
                        size="large"
                      >
                        Process Payment
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Print />}
                        onClick={handlePrintBill}
                      >
                        Print Bill
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Send />}
                        onClick={handleSendBill}
                      >
                        Send to Patient
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Today's Summary */}
              <Grid item xs={12} md={6} lg={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                      Today's Summary
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2">Bills Generated:</Typography>
                      <Chip label="24" color="primary" size="small" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2">Total Revenue:</Typography>
                      <Chip label="$3,450" color="success" size="small" />
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2">Pending Payments:</Typography>
                      <Chip label="$890" color="warning" size="small" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BillingSystem;
