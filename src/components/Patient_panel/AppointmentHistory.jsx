import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { ArrowLeft, History as HistoryIcon, X } from 'lucide-react';
import '../../styles/AppointmentHistory.css';

Modal.setAppElement('#root'); // Required for accessibility

const defaultHistory = [
  {
    id: 1,
    date: '2025-07-01',
    time: '10:30 AM',
    doctor: 'Dr. Smith',
    department: 'Cardiology',
    patient: 'John Doe',
    status: 'Completed',
    notes: 'Routine check-up completed. Advised to reduce salt intake.'
  },
  {
    id: 2,
    date: '2025-06-20',
    time: '03:00 PM',
    doctor: 'Dr. Patel',
    department: 'Dermatology',
    patient: 'John Doe',
    status: 'Cancelled',
    notes: 'Patient cancelled due to travel.'
  },
  {
    id: 3,
    date: '2025-06-10',
    time: '11:00 AM',
    doctor: 'Dr. Rana',
    department: 'Neurology',
    patient: 'John Doe',
    status: 'Completed'
  }
];

const AppointmentHistory = ({ historyData = defaultHistory }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

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
          <ArrowLeft size={20} />
          Appointment History
        </button>
      </header>

      <div className="search-bar">
        <HistoryIcon size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search visits by doctor, department, patient..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="history-list">
        {filtered.length > 0 ? (
          filtered.map(v => (
            <div key={v.id} className={`history-card ${v.status.toLowerCase()}`}>
              <div className="top-row">
                <span className="datetime">{v.date} • {v.time}</span>
                <span className={`status ${v.status.toLowerCase()}`}>{v.status}</span>
              </div>
              <p><strong>Doctor:</strong> {v.doctor} <em>({v.department})</em></p>
              <p><strong>Patient:</strong> {v.patient}</p>
              {v.notes && <p><strong>Notes:</strong> {v.notes}</p>}
              <button className="details-btn" onClick={() => setSelected(v)}>View Details</button>
            </div>
          ))
        ) : (
          <p className="no-data">No appointments found.</p>
        )}
      </div>

      {/* View Details Modal */}
      {selected && (
        <Modal
          isOpen={!!selected}
          onRequestClose={() => setSelected(null)}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <button className="modal-close" onClick={() => setSelected(null)}>
            <X size={20} />
          </button>
          <h2>Appointment Details</h2>
          <p><strong>Date:</strong> {selected.date}</p>
          <p><strong>Time:</strong> {selected.time}</p>
          <p><strong>Status:</strong> {selected.status}</p>
          <p><strong>Doctor:</strong> {selected.doctor}</p>
          <p><strong>Department:</strong> {selected.department}</p>
          <p><strong>Patient:</strong> {selected.patient}</p>
          {selected.notes && <p><strong>Notes:</strong> {selected.notes}</p>}
        </Modal>
      )}
    </div>
  );
};

export default AppointmentHistory;
