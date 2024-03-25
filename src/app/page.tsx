import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Werabytes</h1>
          <p className="text-lg text-gray-600 mb-8">Explore our products and streamline your business processes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-100 rounded-lg shadow-md p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-gray-800 mb-4">efeedbackPro</h2>
              <p className="text-lg text-gray-600 mb-4">A comprehensive feedback collection and management solution designed to streamline the feedback process for businesses of all sizes.</p>
              <a href="https://efeedbackpro.com/" target='_blank' className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300">Learn More</a>
            </div>
            {/* Add more product boxes here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
