import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../components/Layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="pnf">
      <h1 className="title">404</h1>
      <h2 className="heading">Oops ! Page Not Found</h2>
      <Link to="/" className="btn">
        Go Back
      </Link>
      </div>
        
    </Layout>
  );
};

export default Pagenotfound;
