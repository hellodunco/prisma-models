import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCustomer from './pages/AddCustomer';
import AddOrder from './pages/AddOrder';
import Customers from './pages/Customers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Customers />} />
        <Route path='/addcustomer' element={<AddCustomer />} />
        <Route path='/addorder' element={<AddOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
