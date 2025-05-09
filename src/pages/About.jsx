import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

export default function About() {
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
        <Button label="Industries" />
        <Button label="Contact Us" />
        <Button label="Careers" />
      </div>

      <p className="text-center text-xl">ABOUT US
        ADA Consulting Incorporated through the leadership of its founder and president, Arnel D. Alon,
        understands the needs of today's business environment. By using the latest technology, A.D.A. will effectively
        handle technology solutions to your business needs. Whether you are an established industry leader or
        a growing pioneering company, A.D.A. will establish the solution that your company is looking for.

        With Over Fourteen years of consulting services experience, from its technical and management staff,
        A.D.A. has grown rapidly especially in the last 3 years.

        First class customer satisfaction and top rated consultants have been A.D.A.'s primary assets that propelled
        the company to be one of the industries premier leader in software consulting here in the bay area.</p>
      <img src="/ADA.jpg" alt="ADA Logo" className="w-100 h-auto mx-auto" />
    </div>
      
  );
}