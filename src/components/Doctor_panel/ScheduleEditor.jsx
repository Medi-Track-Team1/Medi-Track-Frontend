import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

function ScheduleEditor({ day, data, onSave }) {
  const [slots, setSlots] = useState([]);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (data) {
      setSlots([...data.slots]);
      setWorking(data.working);
    }
  }, [data]);

  const handleAddSlot = () => setSlots([...slots, ""]);
  const handleRemoveSlot = (index) => setSlots(slots.filter((_, i) => i !== index));

  const handleChange = (index, value, part) => {
    const [from, to] = slots[index]?.split(" - ") ?? ["", ""];
    const newSlot = part === "from" ? `${value} - ${to}` : `${from} - ${value}`;
    const updatedSlots = [...slots];
    updatedSlots[index] = newSlot;
    setSlots(updatedSlots);
  };

  const handleToggle = () => setWorking(!working);

  useEffect(() => {
    if (typeof onSave === "function") {
      onSave(day, slots, working);
    }
  }, [slots, working, day, onSave]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Working Day</span>
        <input type="checkbox" checked={working} onChange={handleToggle} className="w-4 h-4" />
      </div>
      {slots.map((slot, i) => {
        const [from, to] = slot.split(" - ");
        return (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input
              type="time"
              value={from}
              onChange={(e) => handleChange(i, e.target.value, "from")}
              className="border rounded p-1"
            />
            <span>to</span>
            <input
              type="time"
              value={to}
              onChange={(e) => handleChange(i, e.target.value, "to")}
              className="border rounded p-1"
            />
            <button onClick={() => handleRemoveSlot(i)} className="text-red-500">
              <Trash2 size={18} />
            </button>
          </div>
        );
      })}
      <button onClick={handleAddSlot} className="bg-blue-600 text-white px-3 py-1 rounded mt-2">
        + Add Time Slot
      </button>
    </div>
  );
}

export default ScheduleEditor;
