// src/components/AppointmentForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/AppointmentForm.css";



const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
const validatePhone = phone => /^\d{10}$/.test(phone);

export default function AppointmentForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    dateTime: '', gender: '', age: '',
    existingPatient: '', doctor: '', department: '',
    reason: '', uploadReports: null
  });
  const [errors, setErrors] = useState({});

  const steps = {
    1: ['name', 'email', 'phone'],
    2: ['age', 'existingPatient', 'dateTime', 'gender'],
    3: ['doctor', 'department', 'reason']
  };

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const validateStep = () => {
    const errs = {};
    steps[step].forEach(key => {
      const val = form[key];
      if (!val?.toString().trim()) errs[key] = 'Required';
      else if (key === 'email' && !validateEmail(form.email)) errs.email = 'Invalid email';
      else if (key === 'phone' && !validatePhone(form.phone)) errs.phone = '10 digits';
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => validateStep() && setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!validateStep()) return;
  //   // send form data here
  //   alert(`Submitted data:\n${JSON.stringify({
  //     ...form,
  //     uploadReports: form.uploadReports?.name || 'None'
  //   }, null, 2)}`);
  // };


  const handleSubmit = e => {
  e.preventDefault();
  if (!validateStep()) return;

  // Construct the alert content:
  const {
    name, email, phone, age, existingPatient,
    dateTime, gender, doctor, department, reason, uploadReports
  } = form;

  alert(
    `🎉 Thanks for your appointment!\n\n` +
    `Here are your details:\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Age: ${age}\n` +
    `Existing Patient: ${existingPatient}\n` +
    `Date & Time: ${new Date(dateTime).toLocaleString()}\n` +
    `Gender: ${gender}\n` +
    `Doctor: ${doctor}\n` +
    `Department: ${department}\n` +
    `Reason: ${reason}\n` +
    `Uploaded Report: ${uploadReports?.name || 'None'}`
  );
};


  return (
    <div className="appointment-form-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Appointment Booking</button>
      <h2 className="form-title">Details</h2>

      <form onSubmit={handleSubmit} noValidate>
        {step === 1 && (
          <>
            <label>Name
              <input name="name" value={form.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
            <label>Email
              <input name="email" value={form.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <label>Phone
              <input name="phone" value={form.phone} onChange={handleChange} />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <label>Age
              <input type="number" name="age" value={form.age} onChange={handleChange} />
              {errors.age && <span className="error">{errors.age}</span>}
            </label>
            <label>Existing Patient?
              <select name="existingPatient" value={form.existingPatient} onChange={handleChange}>
                <option value="">Select...</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {errors.existingPatient && <span className="error">{errors.existingPatient}</span>}
            </label>
            <label>Date & Time
              <input type="datetime-local" name="dateTime" value={form.dateTime} onChange={handleChange} />
              {errors.dateTime && <span className="error">{errors.dateTime}</span>}
            </label>
            <label>Gender
              <select name="gender" value={form.gender} onChange={handleChange}>
                <option value="">Select...</option>
                <option>Male</option><option>Female</option><option>Other</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </label>
            <label>Upload Reports (optional)
              <input type="file" name="uploadReports" onChange={handleChange} className="upload-input" />
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <label>Doctor
              <select name="doctor" value={form.doctor} onChange={handleChange}>
                <option value="">Select...</option>
                <option>Dr. Anushini</option><option>Dr. Kavya</option>
                <option>Dr. Kishore</option><option>Dr. Dharshan</option>
              </select>
              {errors.doctor && <span className="error">{errors.doctor}</span>}
            </label>
            <label>Department
              <select name="department" value={form.department} onChange={handleChange}>
                <option value="">Select...</option>
                <option>Cardiology</option><option>Neurology</option>
                <option>Pediatrics</option><option>Ophthalmology</option>
                <option>Hepatology</option>
              </select>
              {errors.department && <span className="error">{errors.department}</span>}
            </label>
            <label>Reason
              <textarea name="reason" value={form.reason} onChange={handleChange} />
              {errors.reason && <span className="error">{errors.reason}</span>}
            </label>
          </>
        )}

        <div className="form-controls">
          {step > 1 && <button type="button" onClick={prev}>Previous</button>}
          {step < 3 && <button type="button" onClick={next}>Next</button>}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
     

    </div>
  );
}
