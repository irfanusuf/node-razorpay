import React from "react";
import Card from "./sharedComponents/Card";

const Home = (props) => {
  return (
    <div>
      <h1> React Props</h1>

      {/* child component  */}
      <Card description={props.description} />
    </div>
  );
};

export default Home;
