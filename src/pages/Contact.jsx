import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
  return (
    
    <div className="text-center space-y-4">
      <h1 className="text-3xl text-center font-bold underline">A.D.A Consulting Website</h1>

      <div className="flex items-center justify-center space-x-4">
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
      </div>

      <p className="text-center text-xl">Write to us and tell us what you think.
      Should you wish to contact us via email, please click the email on ADA Headquarters tab below, or complete the form below.</p>
      
    </div>
      
  );
}