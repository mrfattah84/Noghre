import Header from './Header';
import Card from './card';

function Social() {
  const socialServises = [
    'مراقبت های روانشناختی',
    'پشتیبانی های اجتماعی',
    'سالمندیار',
    'خدمات حقوقی و تشریفات',
    'خدمات و پشتیبانی پس از فوت',
    'کانون‌های بازنشستگی و خدمات',
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-4 m-8">
        {socialServises.map((service, index) => (
          <Card name={service} key={index} />
        ))}
      </div>
    </>
  );
}

export default Social;
