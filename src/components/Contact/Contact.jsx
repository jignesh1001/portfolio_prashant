import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5i7vuv8', // replace with your EmailJS service ID
        'template_pcniet7', // replace with your EmailJS template ID
        form.current,
        'pQ22QSr3rxQjhUvh-' // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-[#121212] sm:items-center sm:pt-0 px-4 sm:px-6 lg:px-8 text-white">
  <div className="max-w-6xl w-full mx-auto mt-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1f1f1f] rounded-xl overflow-hidden shadow-xl">
      {/* Left: Contact Info */}
      <div className="p-6 sm:p-10 bg-[#2a2a2a]">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get in touch:</h2>
        <p className="text-lg sm:text-xl text-gray-300 mt-2">Fill in the form to start a conversation</p>

        {/* Location */}
        <div className="flex items-center mt-8 text-gray-400">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="ml-4 font-medium">Mumbai, Maharashtra, India</span>
        </div>

        {/* Phone */}
        <div className="flex items-center mt-4 text-gray-400">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="ml-4 font-medium">+91 98926 89801</span>
        </div>

        {/* Email */}
        <div className="flex items-center mt-4 text-gray-400">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="ml-4 font-medium">Prashnat.shinde30701@gmail.com</span>
        </div>
      </div>

      {/* Right: Contact Form */}
      <form onSubmit={sendEmail} ref={form} className="p-6 sm:p-10 bg-[#1a1a1a] flex flex-col justify-center space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Full Name"
          className="py-3 px-4 rounded-lg bg-[#2e2e2e] border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="py-3 px-4 rounded-lg bg-[#2e2e2e] border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
          required
        />
        <input
          type="tel"
          name="user_phone"
          placeholder="Telephone Number"
          className="py-3 px-4 rounded-lg bg-[#2e2e2e] border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Write your Message"
          rows="4"
          className="py-3 px-4 rounded-lg bg-[#2e2e2e] border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full sm:w-40 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>

    );
}
