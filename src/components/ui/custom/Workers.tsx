import useEmblaCarousel from 'embla-carousel-react';
import api from './../../../../public/service/GlobalAPI';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function Workers() {
  const [data, setData] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    api.GetWorkers().then((response) => setData(response.data.data));
  }, []);

  return (
    <div className="flex flex-col items-center w-4/6 mt-28 m-auto">
      <h1 className="mb-5 text-4xl font-bold text-center">همکاران</h1>
      <div className="embla overflow-hidden relative" dir="ltr">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {data.map((item, index) => {
              return (
                <div
                  className="embla__slide grow-0 shrink-0 basis-auto mx-5"
                  key={index}
                >
                  <Card className="h-full w-60 flex flex-col justify-center items-center">
                    <CardHeader>
                      <img
                        className="embla__image aspect-square rounded-full object-cover relative"
                        src={'http://localhost:1337' + item.img.url}
                        alt={`slide ${index + 1}`}
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>
                        <h1 className="">{item.name}</h1>
                      </CardTitle>
                    </CardContent>
                    <CardFooter>
                      <CardDescription>{item.description}</CardDescription>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workers;
