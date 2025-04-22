
import { PhoneCard } from "./phone-card";

const featuredPhones = [
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
];

export const FeaturedPhones = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Хиты продаж</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredPhones.map((phone) => (
            <PhoneCard key={phone.id} {...phone} />
          ))}
        </div>
      </div>
    </section>
  );
};
