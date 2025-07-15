const PatientCard = ({ patient, type }) => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm space-y-1">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{patient.name}</h3>

        {type === "appointment" && (
          <span className={`text-sm px-2 py-1 rounded-full ${
            patient.status === "confirmed"
              ? "bg-blue-100 text-blue-800"
              : "bg-yellow-100 text-yellow-800"
          }`}>
            {patient.status}
          </span>
        )}
      </div>

      {type === "appointment" && (
        <>
          <p>🕐 {patient.time}</p>
          <p>📞 {patient.phone}</p>
          <p>👤 {patient.age}y, {patient.gender}</p>
          <p>📅 Last: {patient.lastVisit}</p>
          <p>🩺 Reason: {patient.reason}</p>
        </>
      )}

      {type === "assigned" && (
        <>
          <p>👤 {patient.age}y, {patient.gender}</p>
          <p>📞 {patient.phone}</p>
          <p>📅 Last: {patient.lastVisit}</p>
          <p>📅 Next: {patient.nextVisit}</p>
          <p>Condition: {patient.condition}</p>
        </>
      )}

      <button className="mt-2 px-4 py-1 bg-white text-blue-800 border border-blue-600 rounded hover:bg-blue-100">
        {type === "appointment" ? "View Details" : "View Profile"}
      </button>
    </div>
  );
};

export default PatientCard;
