// import Button from "../components/Button";

// import { useNavigate } from "react-router-dom";

import FadeIn from "../components/FadeIn";

export default function About() {
    // const navigate = useNavigate();
  return (
    
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
      <FadeIn>
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-center text-xl text-gray-800">ABOUT US</h2>

        <p className="text-left text-xl text-gray-800">
          ADA Consulting Incorporated through the leadership of its founder and president, Arnel D. Alon,
          understands the needs of today's business environment. By using the latest technology, A.D.A. will effectively
          handle technology solutions to your business needs. Whether you are an established industry leader or
          a growing pioneering company, A.D.A. will establish the solution that your company is looking for.

          With Over Fourteen years of consulting services experience, from its technical and management staff,
          A.D.A. has grown rapidly especially in the last 3 years.

          First class customer satisfaction and top rated consultants have been A.D.A.'s primary assets that propelled
          the company to be one of the industries premier leader in software consulting here in the bay area.
        </p>
        </div>
        </FadeIn>
    </div>
      
  );
}