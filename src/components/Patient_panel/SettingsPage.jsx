import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Install via: npm install lucide-react
import '../../styles/SettingsPage.css';


const SettingsPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved!');
    console.log({
      name, email, phone, password, gender, dob, darkMode, profilePic
    });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  return (
    <div className="settings-page">
      {/* Title Row */}
      <div className="settings-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={26} />
        </button>
        <h2>Settings</h2>
      </div>

      <form onSubmit={handleSave}>
        <div>
          <label>Upload Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        </div>

        <div>
          <label>Change Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label>Change Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label>Change Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
          />
        </div>

        <div>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;
