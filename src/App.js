import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Cars from "./components/cars/Cars";
import Models from "./components/layout/Models";
import Testimonials from "./components/layout/Testimonials";
import Cart from "./components/cart/Cart";
import CartProvider from "./context/CartContext";

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
      </CartProvider>
    </>
  );
}

export default App;
