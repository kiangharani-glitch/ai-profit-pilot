const Dashboard = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem' }}>🚀 Apex AI Academy</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
        Dein exklusives AI-Dashboard
      </p>

      <button
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Dashboard;
