"use client";

import React, { useState } from 'react';
import { PlaceholdersAndVanishInputDemo } from './PlaceholdersAndVanishInputDemo';
import { FiSun, FiMoon } from 'react-icons/fi';
import image from './image.png';
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle between light and dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : 'dark'}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-500">
        {/* Dark Mode Toggle */}
        <header className="flex justify-end p-5">
          <button
            className="text-gray-600 dark:text-gray-200 focus:outline-none"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-black"
          style={{
            backgroundImage: `url('https://www.odishaage.com/wp-content/uploads/2021/07/KL-University-Vijayawada-Campus-scaled.jpg')`,
          }}
        >
          <h1 className="text-5xl font-bold mb-6">College Fest 2024</h1>
          <p className="text-xl mb-8 text-center max-w-2xl">
            Join us for an unforgettable experience of learning, music, and
            celebration. Explore events, connect with peers, and make memories!
          </p>
          <a
            href="#events"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition"
          >
            Explore Events
          </a>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 text-center dark:bg-gray-800 dark:text-gray-100">
          <h2 className="text-4xl font-bold mb-10">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
            {/* Event Card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="https://klhashinclude.in/static/media/1.d9eae48287cf4577c816.JPG"
                alt="Concert"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4">Music Concert</h3>
              <p className="mt-2">Live music from top student bands. Don't miss it!</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="https://klefmayavi.org/assets/img/projects/marathon.jpg"
                alt="Tech Symposium"
                className="w-96 h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4">Tech Symposium</h3>
              <p className="mt-2">Explore the latest in tech with industry leaders.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="https://klhashinclude.in/static/media/10.82479c574f524a524b4f.JPG"
                alt="Dance Battle"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4">Dance Battle</h3>
              <p className="mt-2">Showcase your best moves and compete for prizes.</p>
            </div>
          </div>
        </section>

        {/* Bot Interaction Section */}
        <section className="py-20 dark:bg-gray-900">
          <PlaceholdersAndVanishInputDemo />
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-5 dark:bg-gray-900">
          &copy; 2024 College Fest | All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

