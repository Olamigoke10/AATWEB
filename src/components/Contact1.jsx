import React, { useState } from 'react';
import contactImg from '../../public/assets/imgs/contactImg.png';

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-chart-2 mb-4'>Contact Us</h2>
        <p className='text-lg text-foreground max-w-2xl mx-auto'>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className='flex flex-col md:flex-row max-w-6xl mx-auto shadow-xl rounded-2xl bg-primary overflow-hidden'>
        {/* Form Section */}
        <div className='flex-1 p-8 md:p-12 bg-background'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name Field */}
            <div className='flex flex-col'>
              <label htmlFor='name' className='font-semibold text-lg text-chart-2 mb-2'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='p-4 border-2 border-gray-300 rounded-lg focus:border-chart-2 focus:ring-2 focus:ring-chart-2 focus:ring-opacity-50 transition-all duration-200 outline-none'
                placeholder='Enter your name'
                required
              />
            </div>

            {/* Email Field */}
            <div className='flex flex-col'>
              <label htmlFor='email' className='font-semibold text-lg text-chart-2 mb-2'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='p-4 border-2 border-gray-300 rounded-lg focus:border-chart-2 focus:ring-2 focus:ring-chart-2 focus:ring-opacity-50 transition-all duration-200 outline-none'
                placeholder='Enter a valid email address'
                required
              />
            </div>

            {/* Message Field */}
            <div className='flex flex-col'>
              <label htmlFor='message' className='font-semibold text-lg text-chart-2 mb-2'>
                Message:
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className='p-4 border-2 border-gray-300 rounded-lg focus:border-chart-2 focus:ring-2 focus:ring-chart-2 focus:ring-opacity-50 transition-all duration-200 outline-none resize-vertical'
                placeholder='Tell us how we can help you...'
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-chart-2 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-chart-2 focus:ring-opacity-50'
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className='flex-1 bg-gray-100 flex items-center justify-center p-8'>
          <img 
            src={contactImg} 
            alt='Contact us illustration' 
            className='w-full h-auto max-w-md object-cover rounded-lg'
          />
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className='max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='text-center p-6 bg-white rounded-lg shadow-md'>
          <div className='w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
          </div>
          <h3 className='font-semibold text-lg mb-2 text-chart-2'>Visit Us</h3>
          <p className='text-muted-foreground'>101-9908 Franklin Ave T9H2K5 Fort Mcmurray Alberta</p>
        </div>

        <div className='text-center p-6 bg-white rounded-lg shadow-md'>
          <div className='w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
          </div>
          <h3 className='font-semibold text-lg mb-2 text-chart-2'>Call Us</h3>
          <a
                  href="tel:+1234567890"
                  className="text-muted-foreground"
                > 
                  <span>+1 587 276 2765</span>
                  <br />
                  <p className=''>Call Us</p>
                </a>
        </div>

        <div className='text-center p-6 bg-white rounded-lg shadow-md'>
          <div className='w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
            </svg>
          </div>
          <h3 className='font-semibold text-lg mb-2 text-chart-2'>Email Us</h3>
          <a
                  href="mailto:info@aataccountinginc.ca"
                  className="text-muted-foreground"
                >
                  info@aataccountinginc.ca
                </a>
        </div>
      </div>
    </div>
  );
};

export default Contact1;