import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Cars from "./components/cars/Cars";
import Models from "./components/layout/Models";
import Testimonials from "./components/layout/Testimonials";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <Card />
      <Header />
      <About />
      <Services />
      <Cars />
      <Models />
      <Testimonials />
    </>
  );
}

export default App;
