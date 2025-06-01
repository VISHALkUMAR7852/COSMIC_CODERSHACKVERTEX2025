import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-green-600 mb-4">About HealthAI</h1>
        <p className="text-gray-700 mb-4">
          HealthAI is dedicated to bridging the healthcare gap in rural areas by providing instant, AI-powered medical guidance and connecting communities with vital health resources. Our mission is to empower individuals in remote locations with accessible, reliable, and easy-to-understand health information.
        </p>
        <h2 className="text-xl font-semibold text-green-500 mt-6 mb-2">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          We envision a world where everyone, regardless of location, has access to quality healthcare information and support. By leveraging advanced AI and voice technology, we aim to make healthcare more inclusive and approachable for all.
        </p>
        <h2 className="text-xl font-semibold text-green-500 mt-6 mb-2">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Voice-enabled assistance in local languages</li>
          <li>AI-driven symptom checker and health advice</li>
          <li>Easy access to nearby health facilities</li>
          <li>Educational resources for preventive care</li>
        </ul>
        <p className="text-gray-700">
          Join us in our journey to make healthcare accessible for everyone, everywhere.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;