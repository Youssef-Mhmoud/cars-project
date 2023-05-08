import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Cars from "./components/cars/Cars";
import Models from "./components/layout/Models";
import Testimonials from "./components/layout/Testimonials";
import Cart from "./components/cart/Cart";
import CartProvider from "./context/CartContext";
import CarsCompany from "./components/layout/CarsCompany";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <Cart />
        <Header />
        <About />
        <Services />
        <Cars />
        <Models />
        <Testimonials />
        <CarsCompany />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
