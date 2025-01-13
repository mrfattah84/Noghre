import { useEffect, useState } from 'react';
import api from '../../public/service/GlobalAPI';
import Icon from '../components/ui/custom/Icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Header from './components/Header';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.GetServices().then((response) => setData(response.data.data));
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="p-2 text-2xl font-extrabold">خدمات ما</h1>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full h-full p-4">
          {data.map((service: any) => (
            <li key={service.id} className="flex items-center justify-center">
              <Link
                to={`service/${service.articleid}`}
                className="h-full w-full"
              >
                <Card className="flex flex-col gap-2 pt-4 items-center bg-background border-none shadow-2xl">
                  <CardHeader className="p-0">
                    <Icon
                      name={service.icon}
                      size={100}
                      className="w-full h-full text-foreground"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-sm">{service.name}</CardTitle>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
