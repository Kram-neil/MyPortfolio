import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
    return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#certificates" className="hover:text-blue-500">Certificates</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
          {/* Dark Mode Switch */}
          <div className="ml-4 flex items-center">
            <label htmlFor="dark-mode-toggle" className="mr-2">Dark Mode</label>
            <input 
              type="checkbox" 
              id="dark-mode-toggle" 
              checked={darkMode}
              onChange={handleToggle}
              className="hidden"
            />
            <label 
              htmlFor="dark-mode-toggle" 
              className={`cursor-pointer w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition duration-300 ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              <div 
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-1'}`}
              ></div>
              </label>
              </div>
        </nav>
      </header>

    

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-1/3 md:w-1/4 lg:w-1/5 p-4">
        {/* Circular Frame for the Picture */}
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg">
          <img 
            src="/profile.png"  // Profile picture
            alt="Profile" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Name below the picture */}
        <p className="mt-4 text-center text-lg font-semibold text-gray-800">Mark Neil Jugarap</p>
      </div>
    </div>

      {/* Main Content */}
      <main className="container mx-auto mt-12 space-y-16">
        {/* About Section */}
        <section id="about" className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600">
          I am looking for an internship opportunity to gain hands-on experience, contribute to innovative projects, and develop skills that will support my future career in the industry.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">BDRRMC Web Responsive Application</h3>
              <p className="text-gray-600">BDRRMC Web Responsive Application: Enhancing Disaster Preparedness and Responses with Google Maps API and GPS Tracking. The application is an innovative platform intended to improve disaster preparation and response efforts. </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">Sales and Inventory System</h3>
              <p className="text-gray-600">A Sales and Inventoy system for XYT Company made with visual basic.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">ReactJs Portfolio</h3>
              <p className="text-gray-600">A Personal portfolio made from ReactJs and tailwindcss.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certificate 1 */}
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img 
                  src="ITS cert.jpg"  
                  alt="Certificate 1" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-800">ITS Certificate in Cybersecurity</p>
              <p className="text-gray-600">Certiport</p>
            </div>
             {/* Certificate 2 */}
             <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img 
                  src="NC2 cert.jpg"  
                  alt="Certificate 2" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-800">National Certificate II in CSS </p>
              <p className="text-gray-600">TESDA</p>
            </div>
            {/* Certificate 1 */}
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img 
                  src="mta cert.png"  
                  alt="Certificate 1" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-800">MTA Certificate (BADGE) in Introduction to Programming using JAVA</p>
              <p className="text-gray-600">Certiport</p>
            </div>
            {/* Add more certificates as needed */}
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600">Feel free to reach out to me via email or connect with me on social media.</p>
          <ul className="space-y-2 mt-4">
            <li>Email: <a href="mailto:m.jugarap.511752@umindanao.edu.ph" className="text-blue-500">m.jugarap.511752@umindanao.edu.ph</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">N/A</a></li>
            <li>GitHub: <a href="https://github.com/Kram-neil" className="text-blue-500">github.com/Kram-neil</a></li>
            {/* Add more contact options as needed */}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 mt-16">
        <p className="text-center text-gray-600">&copy; 2024 Mark Neil Jugarap. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
