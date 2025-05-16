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
        <h2 className="text-center text-xl text-gray-800">CAREERS</h2>
        <p className="text-left text-xl text-gray-800">
        Careers at ADA Consulting

At ADA Consulting Incorporated, our success is driven by the talent, dedication, and passion of our people. We are committed to attracting, developing, and retaining exceptional professionals who are eager to make a meaningful impact.
<br/><br/>
We place a strong emphasis on individual accountability, technical excellence, and continuous growth. Our team culture values collaboration, innovation, and a shared commitment to delivering outstanding results for our clients.
<br/><br/>
We are always on the lookout for talented individuals across a variety of disciplines. Please check our current openings regularly. If you find an opportunity that aligns with your skills and aspirations, we encourage you to apply by submitting your CV and cover letter to careers@ada-consulting.net.
<br/><br/>
Even if no current openings match your profile, we welcome proactive applications from candidates who believe they can contribute to our continued success. Should your application not be successful immediately, we may consider you for future roles that better align with your experience and qualifications. You're also encouraged to revisit our careers page for new opportunities.
<br/><br/>
Join us—and be part of a team that’s shaping the future of business technology.
        </p>
      </div>
      </FadeIn>
    </div>
      
  );
}