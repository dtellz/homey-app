import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import PublicDashboard from './pages/public-dashboard';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/public-dashboard' element={<PublicDashboard />} />
          <Route path='*' element={<Login />}></Route>

        </Routes>
      </Router>
    </ChakraProvider>

  );
}

export default App;
