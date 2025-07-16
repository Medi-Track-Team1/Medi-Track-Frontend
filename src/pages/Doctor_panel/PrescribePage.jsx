import React, { useRef, useState } from 'react';
import PatientSelector from '../../components/Doctor_panel/PatientSelector';
import AddMedicine from '../../components/Doctor_panel/AddMedicine';
import PrescriptionForm from '../../components/Doctor_panel/PrescriptionForm';
import { useReactToPrint } from 'react-to-print';

export default function PrescribePage() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedMeds, setSelectedMeds] = useState([]);
  const printRef = useRef();

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handleAddMedicine = (med) => {
    if (!selectedMeds.find((m) => m.name === med.name)) {
      setSelectedMeds([
        ...selectedMeds,
        { ...med, dosage: '', timing: [], duration: '' },
      ]);
    }
  };

  const updateMedField = (index, field, value) => {
    const updated = [...selectedMeds];
    updated[index][field] = value;
    setSelectedMeds(updated);
  };

  const handleSave = () => {
    const prescription = {
      patient: selectedPatient,
      medicines: selectedMeds,
      date: new Date().toLocaleDateString(),
    };

    // Store in localStorage or console.log
    localStorage.setItem('lastPrescription', JSON.stringify(prescription));
    alert('✅ Prescription saved successfully!');
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Prescription',
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-['Roboto']">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">💊 Prescribe Medicines</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PatientSelector selected={selectedPatient} onSelect={handlePatientSelect} />
        <AddMedicine onAdd={handleAddMedicine} />
      </div>

      {/* Printable content */}
      <div ref={printRef}>
        <PrescriptionForm selectedMeds={selectedMeds} updateMedField={updateMedField} />
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          💾 Save Prescription
        </button>

        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          🖨️ Print / Download PDF
        </button>
      </div>
    </div>
  );
}
