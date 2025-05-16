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
        At A.D.A. Consulting Incorporated, we are committed to delivering innovative and effective technology solutions tailored to meet the evolving needs of modern businesses. Under the leadership of our founder and president, Arnel D. Alon, we leverage cutting-edge technology and a client-focused approach to help organizations of all sizes achieve their strategic goals.
        <br/><br/>
With over 14 years of consulting experience across our technical and management teams, ADA Consulting has established a strong reputation for excellence. Our rapid growth—particularly over the past three years—is a testament to our dedication to first-class customer service and the exceptional caliber of our consultants.
        <br/><br/>
Whether you are an established industry leader or an emerging enterprise, ADA Consulting delivers the customized solutions and trusted expertise your business needs to succeed. Headquartered in the Bay Area, we are proud to be recognized as one of the region’s premier software consulting firms.
        </p>
        </div>
        </FadeIn>
    </div>
      
  );
}