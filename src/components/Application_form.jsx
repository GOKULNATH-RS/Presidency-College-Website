import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const AdmissionForm = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-3xl p-8 space-y-8 bg-white rounded-xl shadow-lg relative">
        <button 
          onClick={onClose}
          className="absolute top-1 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Top Navbar */}
        <div className="flex justify-between items-center p-4 border-b-2 border-gray-200">
          <img src={logo} alt="logo" className="h-10" />
          <ul className="flex gap-8">
            <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li>Life@</li>
            <li>Placements</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-center text-orange-600">Application Form For Admission</h2>
        <p className="text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="sr-only">Full Name</label>
              <input 
                id="fullName" 
                name="fullName" 
                type="text" 
                required 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email ID</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Email ID"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input 
                id="phone" 
                name="phone" 
                type="text" 
                required 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label htmlFor="course" className="sr-only">Preferred Course</label>
              <select 
                id="course" 
                name="course" 
                required 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
              >
                <option value="">Please Select Preferred Course</option>
                <option value="KPHP">KPHP</option>
                <option value="OtherCourse">Other Course</option>
              </select>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 font-bold text-black bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;
