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
  const handlePay = async () => {
  const res = await fetch("https://b7665179-852e-4f62-b87d-9146d475ccb4-00-z2x56s1xe6z3.janeway.replit.dev/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ machine })
  });

  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Error creating checkout session");
    console.error(data);
  }
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
