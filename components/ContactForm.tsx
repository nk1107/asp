"use client"
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (value.trim() === '') {
      setErrors({ ...errors, [id]: 'This field is required' });
    } else {
      setErrors({ ...errors, [id]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: formData.email ? '' : 'Email is required',
      phone: formData.phone ? '' : 'Phone number is required',
      message: formData.message ? '' : 'Message is required',
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      try {
        // Convert form data to URL-encoded format
        const urlEncodedData = new URLSearchParams();
        urlEncodedData.append('name', formData.name);
        urlEncodedData.append('email', formData.email);
        urlEncodedData.append('phone', formData.phone);
        urlEncodedData.append('message', formData.message);

        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: urlEncodedData.toString(), // Send URL-encoded data
        });

        const result = await response.json();
        if (response.ok) {
          // alert(result.message);
          toast("Email sent successfully")
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          // alert(result.message);
          toast("Failed to send email",result.message)
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email something went wrong');
      }
    }
  };

  return (
    <div className="px-20 py-16 max-w-xl mx-auto mt-10 bg-black shadow-lg rounded-lg overflow-hidden">
      <div className="text-3xl py-4 px-6 text-white text-center font-bold ">
        Send Us A Message!
      </div>
      <form className="py-4 px-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Enter any additional information"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
        </div>

        <div className="flex items-center justify-center mb-4">
          <Button
            className="bg-white text-black py-2 px-4 rounded hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Mail
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
