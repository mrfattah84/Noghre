import { Button } from '../button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

function Header() {
  const { isSignedIn } = useUser();
  return (
    <div className="p-3 px-4 md:px-40 flex  justify-between shadow-md w-full bg-background">
      <div className="flex gap-4 items-center">
        <Link to={'/'}>
          <img
            src="/Logo.png"
            className="mix-blend-multiply"
            width={100}
            height={100}
          />
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          <Link to={'/about'}>درباره ما</Link>
          <Link to={'/contact'}>تماس با ما</Link>
          <Link to={'/services'}>خدمات</Link>
          <Link to={'/blog'}>بلاگ</Link>
          <Link to={'/careers'}>همکاران</Link>
        </div>
      </div>

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={'/app'}>
            <Button variant={'outline'}>پنل کاربری</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={'/auth/signIn'}>
          <Button>ثبت نام</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
