import Carousel from '@/components/ui/custom/Carousel';
import Header from '@/components/ui/custom/Header';

function Home() {
  return (
    <div className="position-relative">
      <div className="position-sticky top-0">
        <Header />
      </div>
      <Carousel
        data={[
          {
            src: 'src/assets/carousel/c1.jpg',
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
            link: '',
          },
          { src: 'src/assets/carousel/c2.jpg', text: '', link: '' },
          { src: 'src/assets/carousel/c3.jpg', text: '', link: '' },
          { src: 'src/assets/carousel/c4.jpg', text: '', link: '' },
          { src: 'src/assets/carousel/c5.jpg', text: '', link: '' },
        ]}
      />
    </div>
  );
}

export default Home;
