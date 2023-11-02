import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Cart from "./component/Cart";
import Hero from "./component/Hero";
import Lightbox from "./component/Lightbox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Cart />
      <Hero />
      <Lightbox />
    </div>
  );
}

export default App;
