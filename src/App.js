import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import PublicDashboard from './pages/public-dashboard';
import PrivateRoute from './pages/private-route';
import PrivateDashboard from './pages/private-dashboard'
import Register from './pages/register';
import PasswordReset from './pages/password-reset';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/password-reset' element={<PasswordReset />}></Route>
          <Route path='/common-dashboard' element={<PrivateRoute><PublicDashboard /></PrivateRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><PrivateDashboard /></PrivateRoute>} />
          <Route path='*' element={<Login />}></Route>

        </Routes>
      </Router>
    </ChakraProvider>

  );
}

export default App;
