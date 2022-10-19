import React from "react";
import Grid from "./components/Grid";
import Container from "react-bootstrap/Container";

const Dashboard = () => {
  return (
    <Container fluid>
      <div>
        <Grid />
      </div>
    </Container>
  );
};

export default Dashboard;
