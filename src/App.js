import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { MessageContextProvider } from './context/MessageContext';
import MainRouter from './MainRouter';

function App() {
  return (
    <MessageContextProvider>
      <AuthContextProvider>
      <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
    </AuthContextProvider>
    </MessageContextProvider>
  );
}

export default App;
