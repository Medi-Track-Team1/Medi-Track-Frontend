import React from 'react';
import Header from './Header';
import Footer from './Footer';

import {
  Calendar,
  FileText,
  Bell,
  ClipboardList,
} from 'lucide-react';

import doctorImage from '../../assets/doctor.jpg';
import backImg from '../../assets/back.jpeg';
import doc1 from '../../assets/doctor1.jpg';
import doc2 from '../../assets/doctor2.jpg';
import doc3 from '../../assets/doctor3.jpg';
import doc4 from '../../assets/doctor4.jpg';



import '../../styles/Home.css';

export const useToast = () => {
  return {
    toast: ({ title, description }) => {
      alert(`${title}\n\n${description}`);
    },
  };
};

const Home = () => {
  const { toast } = useToast();

  const handleFeatureClick = (featureName) => {
    toast({
      title: `${featureName} Feature`,
      description: `${featureName} functionality will be available soon. You'll be notified when it's ready!`,
    });
  };

  return (
    <div className="page-container">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content animated-fade-in">
            <h1 className="animated-slide-up hero-title">
              Welcome to <span className="highlight">MediTrack</span>
            </h1>
            <p className="hero-text animated-slide-up delay-1">
              MediTrack empowers patients and providers to manage appointments, prescriptions, and records seamlessly from anywhere in the world.
            </p>
            <p className="hero-text animated-slide-up delay-2">
              Manage your appointments, prescriptions, and records seamlessly from anywhere.
            </p>
            <p className="hero-text animated-slide-up delay-3">
              Revolutionizing healthcare with technology — smart, secure, and simple.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section zoom-fade-in">
        <div className="stat-card"><h3>10K+</h3><p>Active Patients</p></div>
        <div className="stat-card"><h3>500+</h3><p>Healthcare Providers</p></div>
        <div className="stat-card"><h3>98%</h3><p>Patient Satisfaction</p></div>
        <div className="stat-card"><h3>24/7</h3><p>Support</p></div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image slide-in-left">
            <img src={doctorImage} alt="Doctor" />
          </div>
          <div className="about-content slide-in-right">
            <h2>About <span className="highlight">MediTrack</span></h2>
            <p>MediTrack is your trusted partner in digital healthcare transformation.</p>
            <p>We provide secure, seamless, and smart access to appointments, prescriptions, and medical history.</p>
            <p>Built for hospitals, doctors, and patients—so you stay connected and in control.</p>
            <p>Experience healthcare, simplified.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section animated-section">
        <h2 className="fade-in-up delay-1">Services</h2>
        <div className="services-grid">
          {[
            {
              icon: Calendar,
              title: 'Cardiology',
              desc: 'Expert heart care: congenital defects, arrhythmia management & follow-ups.'
            },
            {
              icon: FileText,
              title: 'Neurology',
              desc: 'Comprehensive brain & nerve care: epilepsy, migraines & developmental delays.'
            },
            {
              icon: ClipboardList,
              title: 'Hepatology',
              desc: 'Advanced liver care: hepatitis, fatty liver & transplant support.'
            },
            {
              icon: Bell,
              title: 'Pediatrics',
              desc: 'Complete child care: wellness, immunizations & chronic illness management.'
            },
            {
              icon: Calendar,
              title: 'Eye Care',
              desc: 'Full pediatric ophthalmology: exams, vision correction & neuro-ophthalmology.'
            }
          ].map((s, i) => (
            <div key={i} className={`service-card zoom-fade-in delay-${1 + i}`}>
              <div className="service-icon"><s.icon size={28} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="services-section animated-section">
        <h2 className="fade-in-up delay-1">Our Doctors</h2>
        <div className="services-grid">
          {[
            {
              img: doc1,
              name: 'Dr. John',
              specialty: 'Cardiologist',
              desc: 'Expert in arrhythmia, heart failure & preventive cardiology.'
            },
            {
              img: doc2,
              name: 'Dr. Anney Nobi',
              specialty: 'Neurologist',
              desc: 'Specializes in epilepsy, migraine and stroke care.'
            },
            {
              img: doc3,
              name: 'Dr. Mohito Ketro',
              specialty: 'Pediatrician',
              desc: 'Focus on child wellness, growth and immunizations.'
            },
            {
              img: doc4,
              name: 'Dr. Anushini',
              specialty: 'Ophthalmologist',
              desc: 'Expert in vision correction and cataract surgery.'
            }
          ].map((d, i) => (
            <div key={i} className={`service-card slide-in-up delay-${1 + i}`}>
              <div className="service-icon">
                <img src={d.img} alt={d.name} className="doctor-thumb" />
              </div>
              <h3>{d.name}</h3>
              <p className="specialty">{d.specialty}</p>
              <p className="desc">{d.desc}</p>
              <button className="doctor-btn" onClick={() => handleFeatureClick(`Book with ${d.name}`)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Contact Details */}
          <div className="contact-details slide-in-left delay-1">
            <h2>Contact <span className="highlight"></span></h2>
            <p><strong>📍 Location:</strong> 123 Health Street, Coimbatore, TN</p>
            <p><strong>📧 Email:</strong> contact@meditrack.com</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          </div>

          {/* Embedded Map */}
          <div className="contact-map slide-in-right delay-2">
            <iframe
              title="MediTrack Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3687330946063!2d76.95524407586558!3d10.994585089193343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f1b961a079%3A0xc75c865a4b693d7e!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625755294829!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section fade-in-up">
        <div className="feedback-container">
         <h2 className="section-title">Feedback</h2>
          <p>We value your feedback! Please share your thoughts with us.</p>
          <form className="feedback-form" onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;
            alert(`Thanks for your feedback, ${name}!`);
            e.target.reset();
          }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              rows="4"
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
