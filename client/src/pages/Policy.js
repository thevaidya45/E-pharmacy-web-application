import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Privacy Policy</p>
          <p>Vulnerability Disclosure Policy</p>
          <p>Terms & Conditions</p>
          <p>Custumer Support Policy</p>
          <p>Return Policy</p>
          <p>Editorial Policy</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
