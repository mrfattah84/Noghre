import { useEffect, useState } from 'react';
import api from './../../../../public/service/GlobalAPI';
import Icon from './Icon';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.GetServices().then((response) => setData(response.data.data));
  }, []);

  return (
    <div className="flex flex-col items-center w-4/6 m-auto">
      <h1 className="p-5 text-6xl font-bold">خدمات</h1>
      <ul className="grid md:grid-cols-3 lg:grid-cols-3 gap-5">
        {data.map((service: any) => (
          <li key={service.id} className="flex items-center justify-center">
            <Link to={`service/${service.articleId}`} className="h-full">
              <Card className="h-full lg:w-5/6">
                <CardHeader>
                  <Icon name={service.icon} className="w-full h-full" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-5">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
