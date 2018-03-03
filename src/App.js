import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #222222;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  padding: 0 192px;
  width: 100vw;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;
export default class App extends Component {
  render() {
    return (
      <Container>
        <h1>Hello World 📦 🚀</h1>
      </Container>
    );
  }
}
