import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className={`py-3`}>
        <Container>Welcome to proshop!</Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
