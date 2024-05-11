import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import PaymentSuccess from "./paymentSuccess";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="success/:id" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
