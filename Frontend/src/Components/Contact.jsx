import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div>
         <div>
        <header className="bg-[url('https://img.freepik.com/free-photo/business-background-woman-showing-invisible-object-hand-gesture_53876-124709.jpg?uid=R200479600&ga=GA1.1.1987297158.1747410234&semt=ais_hybrid&w=740')] bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col  p-6 relative">
            <div className="flex flex-col py-40">
            <h1 className="text-9xl font-extrabold mt-3">Contact Us</h1>
            </div>
        </header>
    </div>

    <div className='py-10 p-4'>
    <h1 className=' text-6xl font-bold py-10'>Let’s Transform Your Brand Together
        Get in Touch Today!</h1>
     </div>
    

    <div className="w-full px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Your message (optional)</label>
            <textarea
              rows="5"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>

        {/* Map + Contact Info */}
        <div className="flex flex-col space-y-6">
          {/* Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9824202465865!2d-73.89261982416148!3d40.65523227140768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d94ec5a33b3%3A0xb410de12ab63300a!2sBJ&#39;s%20Wholesale%20Club!5e0!3m2!1sen!2sin!4v1718785361190!5m2!1sen!2sin"
            width="100%"
            height="335"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow"
          ></iframe>

          {/* Contact Info */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      {/* Address */}
      <div>
        <div className="text-3xl mb-2 text-black flex justify-center">
          <MdLocationOn />
        </div>
        <h3 className="font-bold text-xl">Address</h3>
        <p className="font-semibold text-gray-600">12AB 34CD, Down<br />Town</p>
      </div>

      {/* Phone */}
      <div>
        <div className="text-3xl mb-2 text-black flex justify-center">
          <FiPhone />
        </div>
        <h3 className="font-bold text-xl">Phone</h3>
        <p className="font-semibold text-gray-600">+1 23 456 789,<br />+0 12 345 678</p>
      </div>

      {/* Email */}
      <div>
        <div className="text-3xl mb-2 text-black flex justify-center">
          <HiOutlineMail />
        </div>
        <h3 className="font-bold text-xl">Email</h3>
        <p className="font-semibold text-gray-600">info@domain.com</p>
      </div>
    </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
