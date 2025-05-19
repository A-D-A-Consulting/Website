import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <FadeIn>
      <div className="text-center space-y-4">
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
          <p className="text-left text-xl text-gray-800">
            ADA Consulting Incorporated is a trusted provider of business
            systems consulting services, specializing in the design,
            development, and implementation of advanced computerized business
            applications. Our proven track record spans multiple industries,
            including biotechnology, consumer goods, medical devices, wholesale,
            and distribution.
            <br />
            <br />
            We take pride in our deep understanding of the unique operational
            needs of each client—whether you're a multinational corporation or a
            small business. With a combination of industry expertise and
            technical excellence, ADA Consulting delivers tailored solutions
            that drive efficiency, scalability, and growth.
          </p>
        </div>
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
          <h1 className="text-left text-xl text-gray-800">
            Consulting Services
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="max-w-sm p-6 bg-white rounded shadow">
            <h2 className="text-left text-xl text-gray-800">
              JD Edwards Enterprise One
            </h2>
            <p className="text-left text-m text-gray-800">
              JD Edwards EnterpriseOne (JDE) is an enterprise resource planning
              (ERP) software suite developed by Oracle. It helps businesses
              manage key functions such as finance, supply chain, manufacturing,
              human resources, and project management. The system is modular and
              highly customizable, making it suitable for medium to large
              organizations in various industries. EnterpriseOne runs on
              multiple platforms and features a modern, web-based interface. It
              also integrates smoothly with other Oracle products and
              third-party applications for broader functionality.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white rounded shadow">
            <h2 className="text-left text-xl text-gray-800">
              JD Edwards World
            </h2>
            <p className="text-left text-m text-gray-800">
              JD Edwards World is an ERP software system originally developed by
              JD Edwards and now owned by Oracle. It runs primarily on IBM
              iSeries (AS/400) systems and is known for its stability and
              reliability. World offers integrated modules for finance,
              manufacturing, distribution, and human resources, helping
              organizations manage their core business processes. Unlike
              EnterpriseOne, JD Edwards World has a green-screen interface and
              is less customizable but simpler to maintain. It is often used by
              companies that prioritize consistency, low total cost of
              ownership, and strong legacy system support.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
