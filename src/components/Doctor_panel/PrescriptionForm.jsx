import React from 'react';

export default function PrescriptionForm({ selectedMeds, updateMedField }) {
  const handleMedicineChange = (index, field, value) => {
    updateMedField(index, field, value);
  };

  return (
    <div className="mt-6 bg-white rounded-xl p-6 shadow">
      <h2 className="text-lg font-semibold text-blue-900 mb-4">📝 Prescription Details</h2>

      {selectedMeds.length === 0 ? (
        <p className="text-gray-600">No medicines selected yet.</p>
      ) : (
        selectedMeds.map((med, index) => (
          <div key={index} className="border rounded p-4 mb-5 bg-gray-50">
            <h4 className="font-semibold text-blue-800 mb-1">{med.name}</h4>
            <p className="text-xs text-gray-600 mb-3">{med.type}</p>

            {/* Dosage */}
            <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
            <input
              type="text"
              value={med.dosage}
              onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)}
              placeholder="e.g. 1 tablet or 5ml"
              className="w-full px-3 py-2 mb-4 border rounded"
            />

            {/* Timing */}
            <label className="block text-sm font-medium text-gray-700 mb-1">Timing</label>
            <div className="flex space-x-4 mb-4">
              {['Morning', 'Afternoon', 'Night'].map((time) => (
                <label key={time} className="flex items-center text-sm space-x-1">
                  <input
                    type="checkbox"
                    checked={med.timing.includes(time)}
                    onChange={(e) => {
                      const newTiming = e.target.checked
                        ? [...med.timing, time]
                        : med.timing.filter((t) => t !== time);
                      handleMedicineChange(index, 'timing', newTiming);
                    }}
                  />
                  <span>{time}</span>
                </label>
              ))}
            </div>

            {/* Duration */}
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration (days)</label>
            <input
              type="number"
              min="1"
              value={med.duration}
              onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)}
              placeholder="e.g. 5"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        ))
      )}
    </div>
  );
}
