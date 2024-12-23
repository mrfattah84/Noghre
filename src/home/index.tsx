import CustomCarousel from '@/components/ui/custom/customCarousel';
import Footer from '@/components/ui/custom/Footer';
import Header from '@/components/ui/custom/Header';
import Services from '@/components/ui/custom/Services';
import Stats from '@/components/ui/custom/Stats';
import WhyUs from '@/components/ui/custom/WhyUs';
import Workers from '@/components/ui/custom/Workers';

function Home() {
  return (
    <div className="position-relative flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <CustomCarousel />
      <Services />
      <WhyUs />
      <Stats />
      <Workers />
      <Footer />
      <div className="w-full h-2 bg-secondary"></div>
    </div>
  );
}

export default Home;
