import React from "react";
import { Navigate } from "react-router-dom";
const Ignored = ({ user, children }) => {
  if (user.isConnected) {
    return <Navigate to="/" replaced />;
  }
  return children;
};

export default Ignored;
