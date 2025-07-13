// src/components/SignupForm.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Snackbar,
  Alert,
  IconButton,
  Avatar
} from '@mui/material';
import {
  ArrowBack,
  PersonAdd,
  Save,
  Clear
} from '@mui/icons-material';

const SignupForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    profilePhoto: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange('profilePhoto', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signup Data:', formData);
      setShowSuccess(true);
      setTimeout(() => {
        setFormData({
          username: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          gender: '',
          email: '',
          phone: '',
          profilePhoto: ''
        });
      }, 2000);
    }
  };

  const handleClear = () => {
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      phone: '',
      profilePhoto: ''
    });
    setErrors({});
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={onBack} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Avatar sx={{ bgcolor: '#1976d2', mr: 2 }}>
          <PersonAdd />
        </Avatar>
        <Typography variant="h4" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          Sign Up
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Profile Photo Upload */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Profile Photo
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar
                      sx={{ width: 80, height: 80 }}
                      src={formData.profilePhoto}
                      alt="Profile"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" component="label">
                      Upload Photo
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageUpload}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Account Details */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Account Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Username"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      error={!!errors.username}
                      helperText={errors.username}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      type="password"
                      label="Password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      error={!!errors.password}
                      helperText={errors.password}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange('confirmPassword', e.target.value)
                      }
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword}
                      required
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Personal Info */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Personal Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.gender}>
                      <FormLabel>Gender</FormLabel>
                      <RadioGroup
                        row
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                      >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Contact Info
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      required
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Buttons */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button variant="outlined" onClick={handleClear} startIcon={<Clear />}>
                Clear
              </Button>
              <Button variant="contained" type="submit" startIcon={<Save />}>
                Create Account
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
          Account created successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignupForm;
