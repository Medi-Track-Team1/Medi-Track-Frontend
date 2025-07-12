import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import {
  Bell,
  Settings,
  ArrowLeft,
  Calendar,
  ClipboardList,
  History,
  User
} from 'lucide-react';
import '../../styles/Profile.css';

const FeatureCard = ({ icon: Icon, title, description, route }) => (
  <div className="feature-card">
    <div className="icon-wrapper"><Icon size={32} /></div>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={route}>
      <button className="feature-btn">{title}</button>
    </Link>
  </div>
);

const PatientProfile = () => {
  const navigate = useNavigate();

 const features = [
  {
    icon: History,
    title: 'View History',
    description: 'Past appointments and summaries.',
    route: '/history'
  },
  {
    icon: Calendar,
    title: 'Book Appointments',
    description: 'Schedule upcoming visits.',
    route: '/appointment'
  },
  {
    icon: ClipboardList,
    title: 'View Prescriptions',
    description: 'Current and past prescriptions.',
    route: '/prescriptions'
  }
];


  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="header-left">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <div className="logo">M</div>
          <h1 className="brand-title">Medi<span className="highlight">Track</span></h1>
        </div>
        <div className="header-right">
          <Bell size={24} className="bell-icon" />
          <Settings
            size={24}
            className="settings-icon cursor-pointer"
            onClick={() => navigate('/SettingsPage')}
          />
        </div>
      </header>

      <section className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <User size={48} color="#fff" />
          </div>
          <div className="profile-info">
            <h2>John Doe</h2>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Registered ID:</strong> 12345678</p>
          </div>
        </div>

        <div className="features-grid single-row">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </section>

      {/* ✅ This will render /history, /appointment, /prescriptions */}
      <div className="nested-content">
  <Outlet />
</div>

    </div>
  );
};

export default PatientProfile;
