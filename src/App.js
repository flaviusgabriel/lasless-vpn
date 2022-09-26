import "./App.css";
import Features from "./components/features/Features";
import HeaderNav from "./components/header-nav/HeaderNav";
import Hero from "./components/hero/Hero";
import HeroSection from "./components/heroSection/HeroSection";
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
    </div>
  );
}

export default App;
