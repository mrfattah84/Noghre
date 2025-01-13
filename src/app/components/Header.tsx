import { Phone } from 'lucide-react';

function Header() {
  return (
    <div className="flex items-center justify-between p-5 w-full bg-foreground sticky top-0">
      <div className="w-[60px] rounded-full h-[60px] bg-background flex justify-center items-center">
        <Phone size={37} className="text-foreground" />
      </div>
      <img
        src="/Logo.png"
        className="mix-blend-multiply"
        width={100}
        height={100}
      />
    </div>
  );
}

export default Header;
