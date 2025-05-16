import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {CheckCircle} from "lucide-react";

import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import FadeIn from "../components/FadeIn";

export default function Contact() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      company: form.current.company.value,
      message: form.current.message.value,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
  };

  const navigate = useNavigate();

  return (
    <div>
      <FadeIn>
      <div className="text-center space-y-4">

        {/* <div className="flex items-center justify-center space-x-4">
        <Button 
            onClick={() => navigate('/')}
            label="Home" />
          <Button 
            onClick={() => navigate('/about')}
            label="About Us" />
          <Button 
            onClick={() => navigate('/industries')}
            label="Industries" />
          <Button 
            onClick={() => navigate('/contact')}
            label="Contact Us" />
          <Button 
            onClick={() => navigate('/careers')}
            label="Careers" />
        </div> */}

        <p className="text-center text-xl max-w-xl mx-auto text-gray-800">Write to us and tell us what you think.
        Should you wish to contact us via email, please click the email on ADA Headquarters tab below, or complete the form below.</p>
      </div>
      
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form ref={form} name="contact" onSubmit={sendEmail} className="space-y-4">
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
          <input
            type="text"
            name="company"
            placeholder="Your Company"
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
              className={`px-4 py-2 rounded transition flex items-center justify-center space-x-2
                ${isSubmitted ? "bg-green-600 text-white" : "bg-black text-white hover:bg-gray-800"}`}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Sent!</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </div>
        </form>
      </div>
      </FadeIn>
    </div>
  );
}