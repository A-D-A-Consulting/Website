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
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <p className="text-left text-xl text-gray-800">ADA Consulting Incorporated is a business system consulting firm that specializes in the development and implementation of computerized business applications. We have successfully implemented technical solutions in the biotech, consumer products, medical products, wholesale and distribution industries.
        We understand the business needs of the clients and industries we support whether you are a multi-national corporation or a small office with few employees, we have the expertise and experience that you need.</p>
      </div>
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-left text-xl text-gray-800">Consulting Offerings</h1>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="max-w-sm p-6 bg-white rounded shadow">
            <h2 className="text-left text-xl text-gray-800">JD Edwards Enterprise One</h2>
            <p className="text-left text-m text-gray-800">Oracle's JD Edwards EnterpriseOne is a complete suite modular, pre-intergrated industry-specific business applications designed for rapid...
            </p>
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <h2 className="text-left text-xl text-gray-800">JD Edwards World</h2>
          <p className="text-left text-m text-gray-800">Built for the IBM iSeries platform, Oracle's JD Edwards World offers a world-class enterprise solution for small businesses...
          </p>
        </div>
      </div>
    </div>
      
  );
}