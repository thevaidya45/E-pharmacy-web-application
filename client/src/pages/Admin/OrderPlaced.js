import React from "react";
import Layout from "../components/Layout/Layout";

const OrderPlaced = () => {
  return (
    <Layout>
      <div className="text-center mt-5">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Thank you for your purchase. Your items will be delivered soon.</p>
      </div>
    </Layout>
  );
};

export default OrderPlaced;
