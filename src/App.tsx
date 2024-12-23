import { useUser } from '@clerk/clerk-react';
import Header from './components/ui/custom/Header';
import { Navigate, Outlet } from 'react-router-dom';

export default function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/signIn'} />;
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
