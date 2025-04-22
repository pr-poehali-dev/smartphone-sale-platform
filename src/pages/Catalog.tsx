
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { PhoneCard } from "@/components/phone-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Filter, SortDesc } from "lucide-react";

// Пример данных смартфонов
const phones = [
  {
    id: "1",
    title: "iPhone 15 Pro Max 256GB",
    price: 149990,
    oldPrice: 159990,
    image: "/placeholder.svg",
    rating: 5,
    isNew: true,
  },
  {
    id: "2",
    title: "Samsung Galaxy S23 Ultra 512GB",
    price: 119990,
    oldPrice: 129990,
    image: "/placeholder.svg",
    rating: 4,
  },
  {
    id: "3",
    title: "Google Pixel 7 Pro 128GB",
    price: 89990,
    image: "/placeholder.svg",
    rating: 4,
  },
  {
    id: "4",
    title: "Xiaomi 13T Pro 256GB",
    price: 59990,
    oldPrice: 64990,
    image: "/placeholder.svg",
    rating: 5,
    isNew: true,
  },
  {
    id: "5",
    title: "Realme GT Neo 3 128GB",
    price: 39990,
    oldPrice: 45990,
    image: "/placeholder.svg",
    rating: 4,
  },
  {
    id: "6",
    title: "POCO F5 Pro 256GB",
    price: 44990,
    image: "/placeholder.svg",
    rating: 4,
  },
  {
    id: "7",
    title: "Honor 90 256GB",
    price: 49990,
    oldPrice: 54990,
    image: "/placeholder.svg",
    rating: 4,
  },
  {
    id: "8",
    title: "OnePlus 11 256GB",
    price: 69990,
    image: "/placeholder.svg",
    rating: 5,
  },
];

const CatalogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Каталог смартфонов</h1>
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <SortDesc className="h-4 w-4" />
                Сортировка
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Найдено: {phones.length} моделей
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Фильтры - левая колонка */}
            <div className="hidden md:block space-y-6 bg-muted/40 p-4 rounded-lg">
              <div>
                <h3 className="font-medium mb-3">Цена, ₽</h3>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input type="number" placeholder="От" className="h-8" />
                    <Input type="number" placeholder="До" className="h-8" />
                  </div>
                  <Slider defaultValue={[20000, 80000]} max={200000} step={1000} />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Бренд</h3>
                <div className="space-y-2">
                  {["Apple", "Samsung", "Xiaomi", "Google", "Huawei", "OnePlus", "Realme", "POCO"].map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={`brand-${brand}`} />
                      <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Объем памяти</h3>
                <div className="space-y-2">
                  {["64GB", "128GB", "256GB", "512GB", "1TB"].map((storage) => (
                    <div key={storage} className="flex items-center space-x-2">
                      <Checkbox id={`storage-${storage}`} />
                      <Label htmlFor={`storage-${storage}`}>{storage}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full">Применить</Button>
            </div>
            
            {/* Сетка телефонов */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {phones.map((phone) => (
                <PhoneCard key={phone.id} {...phone} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
