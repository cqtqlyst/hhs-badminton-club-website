import "./App.css";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ForMembers from "./pages/ForMembers";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/AboutUs":
      component = <About />;
      break;
    case "/ForMembers":
      component = <ForMembers />;
      break;
    default:
      component = <Home />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body"> {component}</body>
    </div>
  );
}

export default App;
