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

      <p className="text-center text-xl">CAREERS
Our team's success depends on our individual employees and we are determined to seek, develop and maintain the best individuals. We put great emphasis on the skills and motivation of all our employees and personal accountability is vital to our success as a company. That is why we are keeping an eye for exceptional candidates in various fields.

Please keep posted of our list of current vacancies. If you see any fitting opportunity to utilize what you have and make a difference, kindly apply by sending your CV and a cover letter to careers@ada-consulting.net. If at the moment there are no vacancies that are of interest to you but you believe that we can take your career to the next level, we would like to hear from you!

Should your application be unsuccessful, we may consider you for any subsequent roles which match your skills and experience. You can also continue to review and apply for any new roles online.</p>
      
    </div>
      
  );
}