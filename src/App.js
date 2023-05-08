import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Cars from "./components/cars/Cars";
import Models from "./components/layout/Models";
import Testimonials from "./components/layout/Testimonials";
import Cart from "./components/cart/Cart";
import CardProvider from "./context/CardContext";

function App() {
  return (
    <>
      <CardProvider>
        <Cart />
        <Header />
        <About />
        <Services />
        <Cars />
        <Models />
        <Testimonials />
      </CardProvider>
    </>
  );
}

export default App;
