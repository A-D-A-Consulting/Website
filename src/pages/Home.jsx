import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

export default function Home() {
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

      <p className="text-center text-xl mt-8 mx-64 text-gray-800">ADA Consulting Incorporated is a business system consulting firm that specializes in the development and implementation of computerized business applications. We have successfully implemented technical solutions in the biotech, consumer products, medical products, wholesale and distribution industries.
      We understand the business needs of the clients and industries we support whether you are a multi-national corporation or a small office with few employees, we have the expertise and experience that you need.</p>
      
    </div>
      
  );
}