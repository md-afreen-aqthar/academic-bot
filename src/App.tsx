import { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import './App.css';
import heroImage from './assets/image.png';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto p-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Campus Bot</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#features" className="hover:text-blue-500">Features</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
          <div className="md:hidden">
            <FiMenu className="text-3xl" onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#features" onClick={toggleMenu}>Features</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-60 text-white">
          <h1 className="text-5xl font-bold mb-6">Bot for Better Campus Life</h1>
          <p className="text-lg mb-8 max-w-2xl text-center">
            Enhance your academic and social life with our AI-powered bot. Whether it’s academic assistance or event management, our bot is here to make your college life better.
          </p>
          <a href="#features" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">Explore Features</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-blue-600">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaRobot className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">Academic Assistance</h3>
              <p>
                Provides automated answers to academic queries, personalized study reminders, and course material recommendations based on your course load.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaRobot className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">Event Organization</h3>
              <p>
                Helps students register for events, receive personalized event suggestions, and stay updated on campus activities.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaRobot className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">Social Engagement</h3>
              <p>
                Connect with peers through virtual buddy systems, group chats, and social clubs tailored to your interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Campus Bot | All Rights Reserved</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Floating Chat Bot */}
      <div className="fixed bottom-5 right-5">
        <button onClick={toggleChat} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg">
          <FaRobot className="text-3xl" />
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 bg-white w-80 h-64 rounded-lg shadow-lg flex flex-col">
          <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
            <h3 className="text-lg font-bold">Campus Bot</h3>
            <FaTimes className="cursor-pointer" onClick={toggleChat} />
          </div>
          <div className="flex-grow p-4 overflow-auto">
            <p className="mb-2">Hello! How can I assist you today?</p>
            {/* Here you can add more dynamic bot content */}
            <p className="mt-2 text-gray-500">Bot: Hello, Hello, Hello, Hello, Hello, Hello...</p>
          </div>
          <div className="p-3 border-t">
            <input type="text" className="w-full border rounded-lg p-2" placeholder="Type a message..." />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
