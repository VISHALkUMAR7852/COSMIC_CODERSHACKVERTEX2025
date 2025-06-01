import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ChatbotPage from './pages/ChatbotPage';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import { useNavigate } from 'react-router-dom';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Add Header component */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </main>
      <Footer /> {/* Add Footer component */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform transform hover:scale-110"
        title="Ask Health AI Assistant"
        onClick={() => navigate('/chatbot')}
      >
        <FontAwesomeIcon icon={faRobot} size="2x" />
      </button>
    </div>
  );
}

export default App;