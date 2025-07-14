// src/components/AppointmentForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
  Avatar
} from '@mui/material';
import { ArrowBack, CalendarMonth } from '@mui/icons-material';

const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
const validatePhone = phone => /^\d{10}$/.test(phone);

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    dateTime: '', gender: '', age: '',
    existingPatient: '', doctor: '', department: '',
    reason: '', uploadReports: null
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!validateEmail(formData.email)) errs.email = 'Valid email required';
    if (!validatePhone(formData.phone)) errs.phone = 'Phone must be 10 digits';
    if (!formData.age) errs.age = 'Age is required';
    if (!formData.existingPatient) errs.existingPatient = 'Please select';
    if (!formData.dateTime) errs.dateTime = 'Date/Time required';
    if (!formData.gender) errs.gender = 'Select gender';
    if (!formData.doctor) errs.doctor = 'Select doctor';
    if (!formData.department) errs.department = 'Select department';
    if (!formData.reason.trim()) errs.reason = 'Enter reason for visit';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Appointment Data Submitted:", formData);
    setShowSuccess(true);
    setTimeout(() => {
      setFormData({
        name: '', email: '', phone: '',
        dateTime: '', gender: '', age: '',
        existingPatient: '', doctor: '', department: '',
        reason: '', uploadReports: null
      });
    }, 2000);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button onClick={() => navigate(-1)} startIcon={<ArrowBack />}>
          
        </Button>
        <Avatar sx={{ bgcolor: '#1976d2', ml: 2, mr: 2 }}>
          <CalendarMonth />
        </Avatar>
        <Typography variant="h4" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          Appointment Booking
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>

          {/* Basic Info */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Basic Information</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Medical Info */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Medical Details</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      error={!!errors.age}
                      helperText={errors.age}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.existingPatient}>
                      <InputLabel>Existing Patient</InputLabel>
                      <Select
                        name="existingPatient"
                        value={formData.existingPatient}
                        onChange={handleChange}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      type="datetime-local"
                      label="Appointment Date & Time"
                      name="dateTime"
                      value={formData.dateTime}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.dateTime}
                      helperText={errors.dateTime}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.gender}>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="file"
                      name="uploadReports"
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Doctor & Reason */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Doctor & Visit Reason</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.doctor}>
                      <InputLabel>Doctor</InputLabel>
                      <Select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="Dr. Anushini">Dr. Anushini</MenuItem>
                        <MenuItem value="Dr. Kavya">Dr. Kavya</MenuItem>
                        <MenuItem value="Dr. Kishore">Dr. Kishore</MenuItem>
                        <MenuItem value="Dr. Dharshan">Dr. Dharshan</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.department}>
                      <InputLabel>Department</InputLabel>
                      <Select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="Cardiology">Cardiology</MenuItem>
                        <MenuItem value="Neurology">Neurology</MenuItem>
                        <MenuItem value="Pediatrics">Pediatrics</MenuItem>
                        <MenuItem value="Ophthalmology">Ophthalmology</MenuItem>
                        <MenuItem value="Hepatology">Hepatology</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Reason for Visit"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      error={!!errors.reason}
                      helperText={errors.reason}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="submit" variant="contained">
                Book Appointment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Appointment booked successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AppointmentForm;
