import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">About Werabyte</h1>
      <div className="bg-white shadow-md rounded-lg p-8 mb-8">
        <p className="text-lg text-gray-800">
          Werabyte is a technology company that specializes in developing innovative products and providing software development services for businesses to thrive online. With a focus on enhancing user experience and optimizing business processes, Werabyte empowers organizations to succeed in the digital landscape.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Products</h2>
        <div className="bg-gray-100 rounded-lg p-6">
          <Link target='_blank' href='https://efeedbackpro.com/' className="text-2xl font-semibold  text-blue-600">eFeedbackPro</Link>
          <p className="text-lg text-gray-800 mt-4 ">
            Our flagship product, <Link target='_blank' href='https://efeedbackpro.com/' className=' text-blue-600'  > eFeedbackPro</Link>, is a comprehensive feedback management solution designed to help businesses collect, analyze, and manage feedback from their customers. It seamlessly integrates with clients' websites, enabling businesses to gather valuable insights directly from their website visitors and enhance customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
