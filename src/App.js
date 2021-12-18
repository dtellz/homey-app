import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FormPage from './pages/form-page';
import PublicDashboard from './pages/public-dashboard';
import PrivateRoute from './pages/private-route';
import PrivateDashboard from './pages/private-dashboard'
import Register from './pages/register';
import PaymentConfirmation from './pages/payment-confirmation';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>

          <Route path='/login' element={<FormPage form='login' />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/password-reset' element={<FormPage form='pass' />}></Route>
          <Route path='/contact' element={<FormPage form='contact' />}></Route>
          {/* PRIVATE ROUTES */}
          <Route path='/common-dashboard' element={<PrivateRoute><PublicDashboard /></PrivateRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><PrivateDashboard /></PrivateRoute>} />
          <Route path='/payment-confirmation' element={<PrivateRoute><PaymentConfirmation /></PrivateRoute>} />
          {/* PRIVATE ROUTES */}
          <Route path='*' element={<FormPage form='login' />}></Route>

        </Routes>
      </Router>
    </ChakraProvider>

  );
}

export default App;
