
import { useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface PhoneCardProps {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
}

export const PhoneCard = ({
  id,
  title,
  price,
  oldPrice,
  image,
  rating,
  isNew = false,
}: PhoneCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      {isNew && (
        <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
          Новинка
        </div>
      )}
      <div className="relative p-4">
        <button
          className="absolute top-0 right-0 p-2"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
        <div className="relative h-40 w-full">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <CardContent className="p-4 pt-0">
        <div className="space-y-2">
          <h3 className="font-medium line-clamp-2 h-12">{title}</h3>
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{price.toLocaleString()} ₽</span>
            {oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};
