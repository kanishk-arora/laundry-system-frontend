import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Laundry Payment</h1>
      <Link to="/wash1">Washing Machine 1</Link><br />
      <Link to="/wash2">Washing Machine 2</Link><br />
      <Link to="/dryer">Dryer</Link>
    </div>
  );
}

function MachinePage({ machine }) {
  const handlePay = () => {
      const machineLinks = {
        "Washing Machine 1": "https://buy.stripe.com/test_aEUcP1aFMcx1bgQ4gg",
        "Washing Machine 2": "https://buy.stripe.com/test_8wM4iv4ho1Sn4Ss9AB",
        "Dryer": "https://buy.stripe.com/test_14kaGTaFM54z0Cc7su"
        };

    window.location.href = machineLinks[machine];
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{machine} Payment</h2>
      <button onClick={handlePay}>Pay Now</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wash1" element={<MachinePage machine="Washing Machine 1" />} />
        <Route path="/wash2" element={<MachinePage machine="Washing Machine 2" />} />
        <Route path="/dryer" element={<MachinePage machine="Dryer" />} />
      </Routes>
    </Router>
  );
}
