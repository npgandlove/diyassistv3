import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Shared Components ---
const Navbar = () => (
  <nav style={styles.nav}>
    <Link to="/">
      <img 
        src="./diyassistv10.png" 
        alt="the diy assist logo" 
        style={styles.logo} 
        onError={(e) => e.target.src = 'https://thediyassit.com/50?text=Logo'} 
      />
    </Link>
    <div style={styles.navLinks}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/client">Clients</Link>
      <Link style={styles.link} to="/provider">Providers</Link>
    </div>
  </nav>
);

// --- Page Components ---
const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>the diy assist</h1>
    <p style={styles.text}>
      the diy assist is a place to match diyers with professional providers who 
      will walk you through your project remotely through video chats. 
      we cover items from home improvements to digital technology and basic 
      and advanced technology applications.
    </p>
  </div>
);

const Client = () => (
  <div style={styles.container}>
    <h2>Client Services</h2>
    <p>Ready to start your project? Fill out our service request form below.</p>
    <a href="https://form.jotform.com/260167434511047" target="_blank" rel="noreferrer">
      <button style={styles.button}>Request Service</button>
    </a>
  </div>
);

const Provider = () => (
  <div style={styles.container}>
    <h2>Become a Provider</h2>
    <div style={styles.infoCard}>
      <p>Join our network of experts and help others succeed.</p>
      <ul>
        <li>work from anywhere as long as you have a phone or computer</li>
        <li>Annual Membership: <strong>$250</strong></li>
        <li>Service Fee: <strong>13%</strong></li>
        <li>No additional fees for marketing or advertising</li>
        <li>set your own pricing and adjust as needed</li>
      </ul>
    </div>
    <a href="https://form.jotform.com/260168284665061" target="_blank" rel="noreferrer">
      <button style={styles.button}>Sign Up as a Provider</button>
    </a>
  </div>
);

// --- Main App ---
function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<Client />} />
          <Route path="/provider" element={<Provider />} />
        </Routes>
      </div>
    </Router>
  );
}

// --- Basic Styling ---
const styles = {
  app: { fontFamily: 'sans-serif', color: '#333' },
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '1rem 2rem', 
    borderBottom: '1px solid #eee' 
  },
  logo: { height: '50px', cursor: 'pointer' },
  navLinks: { display: 'flex', gap: '20px' },
  link: { textDecoration: 'none', color: '#007bff', fontWeight: 'bold' },
  container: { padding: '3rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
  title: { fontSize: '3rem', fontWeight: '200', marginBottom: '1.5rem' },
  text: { fontSize: '1.2rem', lineHeight: '1.6' },
  button: { 
    padding: '12px 24px', 
    fontSize: '1rem', 
    backgroundColor: '#007bff', 
    color: 'white', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer' 
  },
  infoCard: { 
    background: '#f9f9f9', 
    padding: '20px', 
    borderRadius: '8px', 
    margin: '20px 0', 
    textAlign: 'left' 
  }
};

export default App;
