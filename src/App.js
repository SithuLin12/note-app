import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { LableContextProvider } from './context/LableContext';
import { MessageContextProvider } from './context/MessageContext';
import MainRouter from './MainRouter';

function App() {
  return (
    <LableContextProvider>
      <MessageContextProvider>
      <AuthContextProvider>
      <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
    </AuthContextProvider>
    </MessageContextProvider>
    </LableContextProvider>
  );
}

export default App;
