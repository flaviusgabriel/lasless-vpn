import "./App.css";
import Brands from "./components/brands/Brands";
import CommentsCarousel from "./components/commentsCarousel/CommentsCarousel";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import HeaderNav from "./components/header-nav/HeaderNav";
import Hero from "./components/hero/Hero";
import HeroSection from "./components/heroSection/HeroSection";
import MapSection from "./components/mapSection/MapSection";
import NavigationMenu from "./components/navigation-menu/NavigationMenu";
import Plan from "./components/plan/Plan";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  return (
    <div>
      {/* <HeaderNav />
      <Hero /> */}
      <NavigationMenu />
      <HeroSection />
      <Features />
      <Plan />
      {/* <TestPage /> */}
      <MapSection />
      <Brands />
      <CommentsCarousel />
      <Footer />
    </div>
  );
}

export default App;
