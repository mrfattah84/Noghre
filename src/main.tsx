import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/index.tsx';
import SignInPage from './auth/signin/index.tsx';
import App from './app/App.tsx';
import HomePage from './app/index.tsx';
import FunPage from './app/fun/index.tsx';
import Social from './app/social/index.tsx';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/app',
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'service/fun',
        element: <FunPage />,
      },
      {
        path: 'service/social',
        element: <Social />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/signin',
    element: <SignInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
