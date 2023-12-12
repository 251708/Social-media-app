
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
 
// Import your components for the different pages
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Sidebar from './pages/Sidebar';

const App: React.FC = () => {
  const location = useLocation();

  // Check if the current location is the Sign up or Sign in page
  const isSignUpOrSignInPage = location.pathname === './pages/Signup' || location.pathname === './pages/Signin';

  return (
    <div>
   
      {!isSignUpOrSignInPage && <Sidebar />}
     
      <Routes>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;




