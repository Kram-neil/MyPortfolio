import React from 'react';

function App() {
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
              <p className="text-gray-600">A brief description of Project 1.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">Sales and Inventory System</h3>
              <p className="text-gray-600">A brief description of Project 2.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">ReactJs Portfolio</h3>
              <p className="text-gray-600">A brief description of Project 3.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Certificates</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>ITS Certificate in Cybersecurity - Certiport</li>
            <li>National Certificate II in CSS - TESDA</li>
            <li>MTA Certificate in Introduction to JAVA - Certiport</li>
            {/* Add more certificates as needed */}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600">Feel free to reach out to me via email or connect with me on social media.</p>
          <ul className="space-y-2 mt-4">
            <li>Email: <a href="mailto:youremail@example.com" className="text-blue-500">m.jugarap.511752@umindanao.edu.ph</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">linkedin.com/in/yourprofile</a></li>
            <li>GitHub: <a href="https://github.com/yourusername" className="text-blue-500">github.com/Kram-neil</a></li>
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
