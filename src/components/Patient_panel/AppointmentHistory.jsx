import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, History as HistoryIcon } from 'lucide-react';

// ✅ Correct (go up two levels to reach "src")
import "../../styles/AppointmentHistory.css";


const AppointmentHistory = ({ historyData = [] }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = historyData.filter(v =>
    [v.doctor, v.department, v.patient, v.status]
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="history-page">
      <header className="history-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20}/> Appointment History
        </button>
      </header>

      <div className="search-bar">
        <HistoryIcon size={20}/>
        <input
          type="text"
          placeholder="Search visits..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="history-list">
        {filtered.length > 0 ? (
          filtered.map(v => (
            <div key={v.id} className={`history-card ${v.status.toLowerCase()}`}>
              <div className="top-row">
                <span>{v.date} • {v.time}</span>
                <span className={`status ${v.status.toLowerCase()}`}>{v.status}</span>
              </div>
              <p><strong>Doctor:</strong> {v.doctor} ({v.department})</p>
              <p><strong>Patient:</strong> {v.patient}</p>
              {v.notes && <p><strong>Notes:</strong> {v.notes}</p>}
            </div>
          ))
        ) : (
          <p className="no-data">No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentHistory;
