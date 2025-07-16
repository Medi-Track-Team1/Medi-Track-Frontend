function DayCard({ day, hours, slots, working }) {
  return (
    <div className={`flex justify-between items-center bg-white p-4 rounded-lg shadow mb-2 ${!working ? 'opacity-50' : ''}`}>
      <div>
        <h3 className="font-semibold">{day}</h3>
        <p className="text-sm text-gray-600">{working ? `${hours} hours working` : 'Not working'}</p>
      </div>
      <div className="flex gap-2">
        {slots.map((slot, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
            {slot}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DayCard;
