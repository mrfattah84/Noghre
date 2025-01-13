import { ArrowLeftCircle, Dice6 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-5 w-full bg-foreground sticky top-0">
      <div className="w-[60px] rounded-full h-[60px] bg-background flex justify-center items-center">
        <Dice6 size={37} className="text-foreground" />
      </div>
      <h1 className="text-background text-xl font-bold">سرگرمی و ورزش</h1>

      <ArrowLeftCircle
        onClick={() => {
          navigate(-1);
        }}
        size={30}
        className="text-background cursor-pointer"
      />
    </div>
  );
}

export default Header;
