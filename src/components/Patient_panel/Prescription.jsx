import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Prescription.css';

const prescriptions = [
  {
    id: 1,
    patient: "John Doe",
    doctor: "Dr. Smith",
    date: "2025-07-10",
    medication: "Paracetamol 500mg - Twice a day",
    notes: "Stay hydrated and rest well"
  },
  {
    id: 2,
    patient: "Jane Smith",
    doctor: "Dr. Patel",
    date: "2025-07-08",
    medication: "Amoxicillin 250mg - Thrice a day",
    notes: "Take after meals"
  }
];

const Prescription = () => {
  return (
    <div className="prescription-page">
      <h2 className="prescription-title">View Prescriptions</h2>
      <div className="prescription-grid">
        {prescriptions.map(p => (
          <motion.div
            className="prescription-card"
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: p.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{p.medication}</h3>
            <p><strong>Patient:</strong> {p.patient}</p>
            <p><strong>Doctor:</strong> {p.doctor}</p>
            <p><strong>Date:</strong> {p.date}</p>
            <p><strong>Notes:</strong> {p.notes}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Prescription;
