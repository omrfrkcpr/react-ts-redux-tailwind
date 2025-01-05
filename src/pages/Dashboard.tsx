import React from "react";
import Asd from "./Asd";

const Dashboard = () => {
  const User = {
    name: "John Doe",
    email: "john@example",
  };

  return (
    <div>
      <Asd user={User} />
    </div>
  );
};

export default Dashboard;
