import "./App.css";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Footer from "./components/Footer";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/AboutUs":
      component = <About />;
      break;
    case "/Events":
      component = <Events />;
      break;
    default:
      component = <Home />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <div>{component}</div>
        <div>
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
