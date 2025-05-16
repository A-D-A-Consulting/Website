// import Button from "../components/Button";

// import { useNavigate } from "react-router-dom";

import FadeIn from "../components/FadeIn";

export default function Home() {
    // const navigate = useNavigate();
  return (
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
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
          <p className="text-left text-xl text-gray-800">ADA Consulting Incorporated is a trusted provider of business systems consulting services, specializing in the design, development, and implementation of advanced computerized business applications. Our proven track record spans multiple industries, including biotechnology, consumer goods, medical devices, wholesale, and distribution.
            <br/><br/>
We take pride in our deep understanding of the unique operational needs of each client—whether you're a multinational corporation or a small business. With a combination of industry expertise and technical excellence, ADA Consulting delivers tailored solutions that drive efficiency, scalability, and growth.</p>
        </div>
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
          <h1 className="text-left text-xl text-gray-800">Consulting Services</h1>
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
    </FadeIn>
  );
}