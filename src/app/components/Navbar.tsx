import {
  Coins,
  Dice6,
  House,
  LayoutDashboard,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed bg-background bottom-0 z-50 flex w-full justify-between items-center shadow-[0_-4px_6px_0_rgba(0,0,0,0.1)]">
      <Link to={'/app'} className="w-full">
        <House size={40} className="text-foreground w-full" />
      </Link>
      <MessageCircle size={40} className="text-foreground w-full" />
      <div className="p-6 bg-foreground rounded-full -translate-y-1/2">
        <Coins size={40} className="text-background" />
      </div>
      <Link to={'service/fun'} className="w-full">
        <Dice6 size={40} className="text-foreground w-full" />
      </Link>
      <LayoutDashboard size={40} className="text-foreground w-full" />
    </div>
  );
}

export default Navbar;
