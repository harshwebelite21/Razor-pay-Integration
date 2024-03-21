import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
