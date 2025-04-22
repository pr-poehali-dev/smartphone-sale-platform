
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    id: "apple",
    title: "Apple",
    image: "/placeholder.svg",
    link: "/catalog/apple",
  },
  {
    id: "samsung",
    title: "Samsung",
    image: "/placeholder.svg",
    link: "/catalog/samsung",
  },
  {
    id: "xiaomi",
    title: "Xiaomi",
    image: "/placeholder.svg",
    link: "/catalog/xiaomi",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Популярные бренды</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.link}>
              <Card className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <h3 className="text-white text-xl font-bold p-4">{category.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
