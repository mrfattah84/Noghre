import { Button } from '../button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

function Header() {
  const { isSignedIn } = useUser();
  return (
    <div className="p-3 px-40 flex justify-between shadow-md w-full">
      <div className="flex gap-4 items-center">
        <Link to={'/'}>
          <img src="/Logo.png" width={100} height={100} />
        </Link>
        <Link to={'/about'}>درباره ما</Link>
        <Link to={'/contact'}>تماس با ما</Link>
        <Link to={'/services'}>خدمات</Link>
        <Link to={'/blog'}>بلاگ</Link>
        <Link to={'/careers'}>همکاران</Link>
      </div>

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={'/dashboard'}>
            <Button variant={'outline'}>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={'/auth/signIn'}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
