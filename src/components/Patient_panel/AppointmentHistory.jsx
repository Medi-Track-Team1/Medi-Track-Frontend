import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { ArrowLeft, X } from 'lucide-react';
import '../../styles/AppointmentHistory.css';

Modal.setAppElement('#root');

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
      <header className="history-header animated-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} />
          <span>Appointment History</span>
        </button>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search visits by doctor, department, patient..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Doctor (Department)</th>
              <th>Patient</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map(v => (
                <tr key={v.id} className="fade-in">
                  <td>{v.date} • {v.time}</td>
                  <td>{v.doctor} ({v.department})</td>
                  <td>{v.patient}</td>
                  <td>
                    <span className={`status-badge ${v.status.toLowerCase()}`}>
                      {v.status}
                    </span>
                  </td>
                  <td>{v.notes || '-'}</td>
                  <td>
                    <button className="details-btn" onClick={() => setSelected(v)}>View Details</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
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
          <div className="details-table">
            <div className="row"><span className="label">Date:</span><span>{selected.date}</span></div>
            <div className="row"><span className="label">Time:</span><span>{selected.time}</span></div>
            <div className="row"><span className="label">Status:</span><span>{selected.status}</span></div>
            <div className="row"><span className="label">Doctor:</span><span>{selected.doctor}</span></div>
            <div className="row"><span className="label">Department:</span><span>{selected.department}</span></div>
            <div className="row"><span className="label">Patient:</span><span>{selected.patient}</span></div>
            {selected.notes && (
              <div className="row"><span className="label">Notes:</span><span>{selected.notes}</span></div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AppointmentHistory;
