
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedPhones } from "@/components/featured-phones";
import { CategoriesSection } from "@/components/categories-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedPhones />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
