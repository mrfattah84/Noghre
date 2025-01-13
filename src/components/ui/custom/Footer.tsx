import { Input } from '../input';

function Footer() {
  return (
    <div className="bg-primary mt-28 flex flex-col justify-center items-center py-10">
      <h1 className="text-5xl font-bold -translate-y-2">نقره</h1>
      <div className="flex flex-col md:flex-row justify-between items-center w-5/6">
        <h2 className="text-xl font-bold">تلفن: 09330456475</h2>
        <h2 className="text-xl font-bold">Faslenoghreh@gmail.com</h2>
      </div>
      <div className="flex flex-col gap-5 justify-between items-center w-5/6 mt-5">
        <div className="text-xl">
          برای دریافت پشتیبانی تلفنی شماره تلفن خود را وارد کنید
        </div>
        <form action="" className="flex gap-4">
          <button className="bg-secondary text-white rounded-full px-4 py-2">
            ارسال
          </button>
          <Input dir="ltr" placeholder="شماره تلفن" />
        </form>
      </div>
      <p className="text-center text-xs -mb-9 mt-5">
        تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت فصل نقره می باشد.
      </p>
    </div>
  );
}

export default Footer;
