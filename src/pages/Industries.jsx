import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

export default function Industries() {
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

      <p className="text-center text-xl">INDUSTRIES
Committed to the relentless pursuit of excellence, A.D.A. Consulting, Inc. works with its clients to deliver innovative technology solutions. Our Professionals are dedicated to business process improvement through leading edge technology, extensive business experience, and a proven track record. We mobilize our staff and our skills to improve the performance of our clients organizations.

First class customer satisfaction and top rated consultants have been A.D.A.'s primary assets that propelled this company to be one of the industries premier leader in software consulting here in the bay area.</p>
      
    </div>
      
  );
}