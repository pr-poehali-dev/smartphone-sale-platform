
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Новый iPhone 15 Pro
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Откройте новые возможности с революционным процессором A17 Pro и камерой 48MP. 
                Титановый корпус делает его самым прочным iPhone.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="px-8">Купить сейчас</Button>
              <Button variant="outline">Подробнее</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="iPhone 15 Pro"
              className="max-h-[500px] object-contain"
              src="/placeholder.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
