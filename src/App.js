import React from 'react'
import { Login } from './pages/login';
import { AuthContextProvider } from './context/auth/auth.context';

function App() {
  return (
    <AuthContextProvider>
      <Login/>
    </AuthContextProvider>
  );
}

export default App;
