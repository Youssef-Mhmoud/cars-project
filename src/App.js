import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection/ServicesSection";
import Cars from "./components/sections/CarsSection/Cars";
import CarModelsSection from "./components/sections/CarModelsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import Cart from "./components/cart/Cart";
import CartProvider from "./context/CartContext";
import Footer from "./components/layout/Footer";
import CompaniesLogo from "./components/layout/CompaniesLogo";

function App() {
  return (
    <>
      <CartProvider>
        <Cart />
        <Header />
        <AboutSection />
        <ServicesSection />
        <Cars />
        <CarModelsSection />
        <TestimonialsSection />
        <CompaniesLogo />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
