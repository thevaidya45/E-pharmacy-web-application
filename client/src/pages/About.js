import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to EPharmacy, your trusted online pharmacy dedicated to delivering high-quality healthcare solutions 
          with convenience and reliability. We are committed to making healthcare accessible by providing a seamless platform where
           you can order medicines, health products, and wellness essentials from the comfort of your home.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
