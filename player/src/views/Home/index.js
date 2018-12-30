import React, { Component } from "react";
import { Header, PlayerContent } from "./../../containers";
import { Container } from "./../../theme/Grid.js";
const Home = () => (
  <div>
    <Header />
    <Container>
      <PlayerContent />
    </Container>
  </div>
);

export default Home;
