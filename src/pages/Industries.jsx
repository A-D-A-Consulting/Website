// import Button from "../components/Button";

// import { useNavigate } from "react-router-dom";

import FadeIn from "../components/FadeIn";

export default function Industries() {
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
        <h2 className="text-center text-xl text-gray-800">INDUSTRIES WE SERVE</h2>
        <p className="text-left text-xl text-gray-800">
        At ADA Consulting Incorporated, we are driven by a commitment to excellence and innovation. We partner with clients across diverse industries to deliver forward-thinking technology solutions that enhance operational efficiency and business performance.
        <br/><br/>
Our experienced professionals combine deep industry knowledge with cutting-edge technologies to streamline processes and drive measurable results. Through a strategic, client-focused approach, we help organizations transform their operations and achieve long-term success.
        <br/><br/>
With a strong foundation built on exceptional customer satisfaction and a team of top-tier consultants, ADA Consulting has earned its reputation as one of the Bay Area’s premier software consulting firms. We are proud to support businesses across a wide range of sectors with solutions tailored to their unique challenges and goals.</p>
      </div>

      <div className="flex items-center justify-center space-x-4 p-6">
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/affymatrix.jpg" alt="Affymatrix Logo" className="w-100 h-auto mx-auto" />
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/bic.jpg" alt="Bic Logo" className="w-100 h-auto mx-auto" />
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/dole.jpg" alt="Dole Logo" className="w-100 h-auto mx-auto" />
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/granite.png" alt="Granite Logo" className="w-100 h-auto mx-auto" />
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/invisalign.jpg" alt="Invisalign Logo" className="w-100 h-auto mx-auto" />
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/manns.jpg" alt="Manns Logo" className="w-100 h-auto mx-auto" />
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/molina.png" alt="Molina Logo" className="w-100 h-auto mx-auto" />
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/tanimura.jpg" alt="Tanimura Logo" className="w-100 h-auto mx-auto" />
        </div>
        <div className="max-w-sm p-6 bg-white rounded shadow">
          <img src="/tomkin.jpg" alt="Thomas Kinkade Logo" className="w-100 h-auto mx-auto" />
        </div>
      </div>
      </FadeIn>
    </div>
      
  );
}