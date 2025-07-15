import React from "react";
import { appointmentsToday, appointmentHistory } from "../../utils/Doctor_panel/patientsData";

const PatientsAppointments = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8 px-4 font-roboto">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Doctor Info */}
        <div className="bg-white rounded-lg shadow-md px-6 py-5 text-center">
          <p className="text-sm text-gray-500">Cardiologist</p>
          <h2 className="text-2xl font-bold text-gray-800">Dr. John Doe</h2>
          <p className="text-sm text-gray-400">Apollo Hospitals</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBox label="Today's Appointments" value="8" />
          <StatBox label="Assigned Patients" value="45" />
          <StatBox label="Pending Confirmations" value="3" />
          <StatBox label="This Week" value="12" />
        </div>

        {/* Upcoming Appointments */}
        <SectionTable
          title="Upcoming Appointments"
          data={appointmentsToday}
          fields={["id", "name", "time", "status"]}
        />

        {/* Appointment History */}
        <SectionTable
          title="Appointments History"
          data={appointmentHistory}
          fields={["id", "name", "date", "time", "status"]}
        />

      </div>
    </div>
  );
};

const StatBox = ({ label, value }) => (
  <div className="bg-white rounded-md shadow text-center p-4">
    <p className="text-xl font-semibold text-gray-700">{value}</p>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

const SectionTable = ({ title, data, fields }) => {
  const headers = {
    id: "Appointment ID",
    name: "Patient Name",
    date: "Date",
    time: "Time",
    status: "Status"
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              {fields.map((field) => (
                <th key={field} className="px-6 py-3 text-left font-medium">
                  {headers[field]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                {fields.map((field, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-6 py-3 ${
                      field === "status"
                        ? getStatusColor(row[field])
                        : "text-gray-700"
                    } capitalize`}
                  >
                    {row[field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
  const s = status.toLowerCase();
  if (s === "confirmed" || s === "completed") return "text-green-600 font-medium";
  if (s === "pending") return "text-yellow-600 font-medium";
  if (s === "cancelled") return "text-red-500 font-medium";
  return "text-gray-500";
};

export default PatientsAppointments;
