import { useUser } from '@clerk/clerk-react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/signIn'} />;
  }

  return (
    <div id="app" className="relative h-[100dvh] bg-background">
      <Outlet />
      <Navbar />
    </div>
  );
}
