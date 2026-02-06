import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
// import StrategyGenerator from './components/StrategyGenerator';
// import ChatConsultant from './components/ChatConsultant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
  case 'dashboard':
    return <Dashboard />;
  default:
    return <Dashboard />;
}
      case 'consultant':
        return <ChatConsultant />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
