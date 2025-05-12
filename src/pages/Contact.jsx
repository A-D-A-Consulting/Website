import { useRef } from "react";
import emailjs from "emailjs-com";

import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wl9ri2r",
        "template_bte6fvq",
        form.current,
        "fZJphiyuBwmZxCKHM"
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border px-3 py-2 rounded"
          rows="5"
          required
        ></textarea>
        <div className="flex justify-between items-center w-full max-w-xl mx-auto mt-4">
          <Button 
            onClick={() => navigate('/')}
            label="Back" />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}