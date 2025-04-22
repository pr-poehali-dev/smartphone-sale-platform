
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">ТелеМир</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              О компании
            </Link>
            <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex w-full max-w-sm items-center gap-2 mx-4">
          <Input
            type="search"
            placeholder="Поиск товаров..."
            className="h-9 md:w-[300px] lg:w-[400px]"
          />
          <Button size="sm" variant="ghost" className="h-9 px-2 text-primary">
            <Search className="h-4 w-4" />
            <span className="sr-only">Поиск</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary"
            aria-label="Корзина"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary"
            aria-label="Личный кабинет"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            aria-label="Меню"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
