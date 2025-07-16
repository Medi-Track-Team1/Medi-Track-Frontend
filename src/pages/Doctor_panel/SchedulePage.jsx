import DayCard from "../../components/Doctor_panel/DayCard";
import ScheduleEditor from "../../components/Doctor_panel/ScheduleEditor";
import Navbar from "../../components/Doctor_panel/Navbar";

function SchedulePage() {
  const schedule = [
    { day: "Monday", hours: 6, slots: ["09:00 - 12:00", "14:00 - 17:00"], working: true },
    { day: "Tuesday", hours: 6, slots: ["09:00 - 12:00", "14:00 - 17:00"], working: true },
    { day: "Wednesday", hours: 6, slots: ["09:00 - 12:00", "14:00 - 17:00"], working: true },
    { day: "Thursday", hours: 6, slots: ["09:00 - 12:00", "14:00 - 17:00"], working: true },
    { day: "Friday", hours: 6, slots: ["09:00 - 12:00", "14:00 - 17:00"], working: true },
    { day: "Saturday", hours: 0, slots: [], working: false },
    { day: "Sunday", hours: 0, slots: [], working: false },
  ];

  // ✅ This is the function to handle save logic
  const handleSave = (data) => {
    console.log("Saving data:", data);
    // Add logic to save schedule (e.g., send to backend)
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weekly Schedule Overview */}
        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold text-blue-900 mb-4">
            📅 Weekly Schedule Overview
          </h2>

          {schedule.map((d, i) => (
            <DayCard key={i} {...d} />
          ))}
        </div>

        {/* Edit Panel */}
        <div className="p-4 bg-white rounded-xl shadow">
          <ScheduleEditor day="Monday" onSave={handleSave} />
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
