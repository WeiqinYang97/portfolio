import About from "./components/about/About";
import Intro from "./components/intro/Intro";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default App;