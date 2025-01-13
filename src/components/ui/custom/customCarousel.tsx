import useEmblaCarousel from 'embla-carousel-react';
import api from './../../../../public/service/GlobalAPI';
import { useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Button } from '../button';
import { Link } from 'react-router-dom';

function CustomCarousel() {
  const [data, setData] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    api.GetServices().then((response) => setData(response.data.data));
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden relative" dir="ltr">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex ">
          {data.map((item: any, index) => {
            return (
              <div
                className="embla__slide grow-0 shrink-0 basis-full min-w-0 relative shadow-[inset_0_-100px_200px_10px_black]"
                key={index}
              >
                <div className="absolute right-0 top-0 m-4 lg:m-12" dir="rtl">
                  <h1 className="p-4 my-2 lg:p-0 lg:my-4 bg-background lg:bg-transparent rounded-md font-bold text-3xl">
                    {item.name}
                  </h1>
                  <p className="hidden lg:block text-lg lg:w-2/4 my-4">
                    {item.description}
                  </p>
                  <Link to={`/services/${item.articleid}`} key={index}>
                    <Button>بیشتر بدانید</Button>
                  </Link>
                </div>
                <img
                  className="embla__image h-[50dvh] w-full object-contain relative -z-50 lg:-translate-x-[20%]"
                  src={api.GetImgUrl(item.img.url)}
                  alt={`slide ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="embla__prev absolute left-5 top-1/2"
        onClick={scrollPrev}
      >
        <ArrowLeftCircle size={24} className="text-secondary" />
      </button>
      <button
        className="embla__next absolute right-5 top-1/2"
        onClick={scrollNext}
      >
        <ArrowRightCircle size={24} className="text-secondary" />
      </button>
    </div>
  );
}

export default CustomCarousel;
