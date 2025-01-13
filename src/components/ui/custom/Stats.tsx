import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

function Stats() {
  return (
    <div className="grid lg:grid-cols-4 w-4/6 m-auto pt-28 gap-5">
      <Card className="h-full lg:w-5/6">
        <CardContent className="flex flex-col justify-center items-center">
          <CardTitle className="m-5 text-primary">+1000</CardTitle>
          <CardDescription className="text-xl">کاربر</CardDescription>
        </CardContent>
      </Card>
      <Card className="h-full lg:w-5/6">
        <CardContent className="flex flex-col justify-center items-center">
          <CardTitle className="m-5 text-primary">+3400</CardTitle>
          <CardDescription className="text-xl">ساعت خدمت</CardDescription>
        </CardContent>
      </Card>
      <Card className="h-full lg:w-5/6">
        <CardContent className="flex flex-col justify-center items-center">
          <CardTitle className="m-5 text-primary">+100</CardTitle>
          <CardDescription className="text-xl">حامی سالمند</CardDescription>
        </CardContent>
      </Card>
      <Card className="h-full lg:w-5/6">
        <CardContent className="flex flex-col justify-center items-center">
          <CardTitle className="m-5 text-primary">1</CardTitle>
          <CardDescription className="text-xl ">شهر</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

export default Stats;
