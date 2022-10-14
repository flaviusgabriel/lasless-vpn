import "./App.css";
import Brands from "./components/brands/Brands";
import CommentsCarousel from "./components/commentsCarousel/CommentsCarousel";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";

import HeroSection from "./components/heroSection/HeroSection";
import MapSection from "./components/mapSection/MapSection";
import NavigationMenu from "./components/navigation-menu/NavigationMenu";
import Plan from "./components/plan/Plan";

function App() {
  return (
    <div>
      <NavigationMenu />
      <HeroSection />
      <Features />
      <Plan />
      <MapSection />
      <Brands />
      <CommentsCarousel />
      <Footer />
    </div>
  );
}

export default App;
