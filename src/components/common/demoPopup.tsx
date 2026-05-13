"use client";
import React, { useState } from 'react';
import axios from 'axios';

const DemoPopupModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: 'Video Production',
    challenge: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Prepare the Professional Message
    const message = `*New One-on-One Session Request*%0A%0A` +
                    `*Client:* ${formData.name}%0A` +
                    `*Email:* ${formData.email}%0A` +
                    `*Business:* ${formData.business}%0A` +
                    `*Service:* ${formData.service}%0A` +
                    `*Challenge:* ${formData.challenge}%0A%0A` +
                    `_Sent via Daniekeys Studios website_`;

    // 2. UltraMsg Configuration
    const instanceId = 'instance174819'; // Replace with yours
    const token = 'kxzysufeefez3w3d';           // Replace with yours
    const adminPhone = '+2349030909624';    // Your WhatsApp number

    const url = `https://api.ultramsg.com/${instanceId}/messages/chat`;
    
    const params = new URLSearchParams();
    params.append('token', token);
    params.append('to', adminPhone);
    params.append('body', message.replace(/%0A/g, '\n')); // Converting web-breaks to real line breaks

    try {
      // 3. Send the message in the background
      await axios.post(url, params);
      
      setStatus('success');
      // Close modal after 2 seconds of showing success
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    } catch (error) {
      console.error("WhatsApp Send Error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-70 mt-10 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg p-8 bg-[#0a0a0a] border border-blue-900/40 rounded-3xl shadow-[0_0_50px_rgba(0,112,243,0.15)]">
        
        {status === 'success' ? (
          <div className="text-center py-10 animate-pulse">
            <h2 className="text-2xl font-bold text-green-400">Request Received! ✅</h2>
            <p className="text-gray-400 mt-2">We will message you on WhatsApp shortly.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start mb-6">
               <div>
                <h2 className="text-2xl font-bold text-white">One-on-One Session</h2>
                <p className="text-gray-400 text-sm">Curious? Let's discuss your project.</p>
               </div>
               <button onClick={onClose} className="text-gray-500 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="p-3 bg-[#111] border border-gray-800 rounded-xl text-white outline-none focus:border-blue-500" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="Business Name" className="p-3 bg-[#111] border border-gray-800 rounded-xl text-white outline-none focus:border-blue-500" 
                  onChange={(e) => setFormData({...formData, business: e.target.value})} />
              </div>
              <input required type="email" placeholder="Email Address" className="w-full p-3 bg-[#111] border border-gray-800 rounded-xl text-white outline-none focus:border-blue-500" 
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
              
              <select className="w-full p-3 bg-[#111] border border-gray-800 rounded-xl text-white outline-none"
                onChange={(e) => setFormData({...formData, service: e.target.value})}>
                <option>Video Production</option>
                <option>Photography</option>
                <option>Digital Marketing</option>
                <option>Others</option>
              </select>

              <textarea required placeholder="What would you like to know about us?" className="w-full p-3 bg-[#111] border border-gray-800 rounded-xl text-white outline-none h-24" 
                onChange={(e) => setFormData({...formData, challenge: e.target.value})} />

              <button 
                disabled={status === 'sending'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'Processing...' : 'Confirm Session'}
              </button>
              {status === 'error' && <p className="text-red-500 text-center text-xs">Something went wrong. Please try again.</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoPopupModal;